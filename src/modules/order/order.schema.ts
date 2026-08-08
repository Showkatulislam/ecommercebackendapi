import z from 'zod';

export const createOrderSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string('Product id is required.'),
      quantity: z.number().min(1, 'Product Quantity is required.'),
    })
  ),
  addressId: z.string(),
});

export type createOrderDTO = z.infer<typeof createOrderSchema>;
