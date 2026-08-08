import type { Product } from '../../../prisma/generate/index.js';
import { prisma } from '../../lib/prisma.js';
import type { IProductInterface } from './product.interface.js';
import type { EditProductSchemaDTO, ProductSchemaDTO } from './product.schema.js';

export class ProductRepository implements IProductInterface {
  async createProduct(data: {
    createdById: string;
    categoryId: string;
    productName: string;
    productDesc: string;
    productImages: string[];
    price: any;
    stock: number;
  }) {
    console.log(data);
    const newProduct = await prisma.product.create({
      data,
    });

    return newProduct;
  }

  async getAllProduct(): Promise<Product[]> {
    return prisma.product.findMany();
  }
  async getAllActiveProduct(): Promise<Product[]> {
    return prisma.product.findMany({
      where: {
        isActive: true,
      },
    });
  }
  async getProductByCategory(catId: string): Promise<Product[]> {
    return await prisma.product.findMany({
      where: {
        categoryId: catId,
      },
    });
  }
  async getProductById(productId: string): Promise<Product | null> {
    return await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
  }
  async editProductById(data: EditProductSchemaDTO, productId: string): Promise<Product> {
    return prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        ...(data.productName !== undefined && {
          productName: data.productName,
        }),

        ...(data.productDesc !== undefined && {
          productDesc: data.productDesc,
        }),

        ...(data.categoryId !== undefined && {
          categoryId: data.categoryId,
        }),

        ...(data.price !== undefined && { stock: data.price }),

        ...(data.price !== undefined && {
          price: data.price,
        }),
      },
    });
  }
  async deleteProductById(productId: string): Promise<any> {
    return await prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}
