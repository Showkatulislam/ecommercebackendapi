import { AppError } from '../../utils/AppError.js';
import { sendResponse } from '../../utils/sendResponse.js';
import type { IcategoryInterface } from './category.interface.js';
import type { CreateCategoryDTO, updateCategoryDTO } from './category.schema.js';

export class CategoryService {
  private readonly categoryrepo;
  constructor(rep: IcategoryInterface) {
    this.categoryrepo = rep;
  }
  async createCategory(body: CreateCategoryDTO) {
    const result = await this.categoryrepo.createCategory(body);
    return result;
  }
  async getAllcategory() {
    const result = await this.categoryrepo.getAllCategory();
    return result;
  }

  async updateCategory(body: updateCategoryDTO, categoryId: string) {
    const category = await this.categoryrepo.getCategoryById(categoryId);
    console.log(category);

    if (!category) {
      throw new AppError('Category is not Found.', 404);
    }

    const result = await this.categoryrepo.updateCategory(body, categoryId);

    return result;
  }

  async deleteCategory(categoryId: string) {
    const category = await this.categoryrepo.getCategoryById(categoryId);

    if (!category) {
      throw new AppError('Category is not Found.', 404);
    }

    await this.categoryrepo.deleteCategory(categoryId);

    return true;
  }
}
