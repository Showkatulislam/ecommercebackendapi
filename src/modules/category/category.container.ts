import { CategoryController } from './category.controller.js';
import { CategoryRepository } from './category.repository.js';
import { CategoryService } from './category.service.js';
const categoryRepository = new CategoryRepository();

const categoryService = new CategoryService(categoryRepository);

export const categoryController = new CategoryController(categoryService);
