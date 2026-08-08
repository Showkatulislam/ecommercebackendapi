import z from 'zod';
export const createCategorySchema = z.object({
  name: z.string().min(2, 'Category is required.'),
  description: z.string().min(10, 'Description is needed.'),
});
export const updateCategorySchema = z.object({
  name: z.string().min(2, 'Category name is required.').optional(),
  description: z.string().min(2, 'Description is required.').optional(),
});
export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;
export type updateCategoryDTO = z.infer<typeof updateCategorySchema>;
