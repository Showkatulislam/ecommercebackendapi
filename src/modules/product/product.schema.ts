import z from 'zod';

export const createProductSchema = z.object({
  categoryId: z.string().min(1, 'Category is required.'),

  productName: z.string().min(2, 'Product name is required.'),

  productDesc: z.string().min(2, 'Description is required.'),

  price: z.coerce.number().positive('Price must be greater than 0.'),

  stock: z.coerce
    .number()
    .int('Stock must be an integer.')
    .nonnegative('Stock cannot be negative.'),
});

export const editProductSchema = z.object({
  categoryId: z.string().min(1).optional(),
  productName: z.string().min(2).optional(),
  productDesc: z.string().min(2).optional(),
  price: z.coerce.number().positive().optional(),
});

export type ProductSchemaDTO = z.infer<typeof createProductSchema>;
export type EditProductSchemaDTO = z.infer<typeof editProductSchema>;
