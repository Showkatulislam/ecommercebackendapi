import type { Category } from '../../../prisma/generate/index.js';
import { prisma } from '../../lib/prisma.js';
import type { IcategoryInterface } from './category.interface.js';
import type { CreateCategoryDTO, updateCategoryDTO } from './category.schema.js';

export class CategoryRepository implements IcategoryInterface {
  async createCategory(data: CreateCategoryDTO): Promise<Category> {
    const result = await prisma.category.create({
      data,
    });
    return result;
  }
  async getAllCategory(): Promise<Category[] | null> {
    const result = await prisma.category.findMany();
    return result;
  }
  async getCategoryById(categoryId: string): Promise<Category | null> {
    return await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });
  }
  async updateCategory(data: updateCategoryDTO, categoryId: string): Promise<Category> {
    const updatedCategory = await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        ...(data.name !== undefined && {
          name: data.name,
        }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
      },
    });

    return updatedCategory;
  }
  async deleteCategory(categoryId: string): Promise<any> {
    return await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}
