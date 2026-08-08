import { Prisma } from '../../../prisma/generate/index.js';
import { prisma } from '../../lib/prisma.js';
import { AppError } from '../../utils/AppError.js';
import type { IOrderInterface } from './order.interface.js';
import type { createOrderDTO } from './order.schema.js';

export class OrderService {
  constructor(private repository: IOrderInterface) {}

  async create(userId: string, data: createOrderDTO) {
    const { addressId, items } = data;

    // ----------------------------------------
    // 1. Validate order items
    // ----------------------------------------

    if (!items || items.length === 0) {
      throw new AppError('Order must contain at least one item.', 400);
    }

    // Validate quantities
    for (const item of items) {
      if (item.quantity <= 0) {
        throw new AppError('Product quantity must be greater than 0.', 400);
      }
    }

    // ----------------------------------------
    // 2. Start transaction
    // ----------------------------------------

    return prisma.$transaction(async (tx) => {
      // ----------------------------------------
      // 3. Validate address
      // ----------------------------------------

      const address = await tx.address.findUnique({
        where: {
          id: addressId,
        },
      });

      if (!address) {
        throw new AppError('Address not found.', 404);
      }

      if (address.userId !== userId) {
        throw new AppError('You are not authorized to use this address.', 403);
      }

      // ----------------------------------------
      // 4. Prevent duplicate products
      // ----------------------------------------

      const productIds = items.map((item) => item.productId);

      const uniqueProductIds = [...new Set(productIds)];

      if (uniqueProductIds.length !== productIds.length) {
        throw new AppError('Duplicate products are not allowed in an order.', 400);
      }

      // ----------------------------------------
      // 5. Fetch products
      // ----------------------------------------

      const products = await tx.product.findMany({
        where: {
          id: {
            in: uniqueProductIds,
          },
        },
      });

      // ----------------------------------------
      // 6. Check all products exist
      // ----------------------------------------

      if (products.length !== uniqueProductIds.length) {
        throw new AppError('One or more products were not found.', 404);
      }

      // ----------------------------------------
      // 7. Create product lookup map
      // ----------------------------------------

      const productMap = new Map(products.map((product) => [product.id, product]));

      // ----------------------------------------
      // 8. Calculate order
      // ----------------------------------------

      let totalPrice = new Prisma.Decimal(0);

      let totalItems = 0;

      const orderItemsData: {
        productId: string;
        quantity: number;
        unitPrice: Prisma.Decimal;
      }[] = [];

      // ----------------------------------------
      // 9. Check stock + reserve/deduct stock
      // ----------------------------------------

      for (const item of items) {
        const product = productMap.get(item.productId);

        if (!product) {
          throw new AppError('Product not found.', 404);
        }

        if (!product.isActive) {
          throw new AppError(`${product.productName} is not available.`, 400);
        }

        // ----------------------------------------
        // Atomic stock update
        // ----------------------------------------

        const updatedProduct = await tx.product.updateMany({
          where: {
            id: product.id,
            isActive: true,
            stock: {
              gte: item.quantity,
            },
          },

          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });

        // ----------------------------------------
        // Stock wasn't enough
        // ----------------------------------------

        if (updatedProduct.count === 0) {
          throw new AppError(`Insufficient stock for ${product.productName}.`, 409);
        }

        // ----------------------------------------
        // Calculate price
        // ----------------------------------------

        const itemTotal = product.price.mul(item.quantity);

        totalPrice = totalPrice.add(itemTotal);

        totalItems += item.quantity;

        // ----------------------------------------
        // Snapshot product price
        // ----------------------------------------

        orderItemsData.push({
          productId: product.id,
          quantity: item.quantity,
          unitPrice: product.price,
        });
      }

      // ----------------------------------------
      // 10. Create order
      // ----------------------------------------

      const order = await tx.order.create({
        data: {
          addressId,
          userId,

          totalAmount: totalPrice,

          totalItem: totalItems,

          orderItems: {
            create: orderItemsData,
          },
        },

        include: {
          orderItems: true,
        },
      });

      // ----------------------------------------
      // 11. Return order
      // ----------------------------------------

      return order;
    });
  }
}
