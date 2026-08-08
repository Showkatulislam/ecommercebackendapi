import type { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync.js';
import type { CategoryService } from './category.service.js';
import { sendResponse } from '../../utils/sendResponse.js';

export class CategoryController {
  private readonly service;
  constructor(categoryService: CategoryService) {
    this.service = categoryService;
  }
  createCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.createCategory(req.body);

    sendResponse(res, {
      success: true,
      message: 'Category created Successfully',
      statusCode: 200,
      data: result,
    });
  });
  getAllCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.getAllcategory();
    sendResponse(res, {
      message: 'Category Fetch successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
  updateCategory = catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.catId as string;
    console.log(categoryId);
    const result = await this.service.updateCategory(req.body, categoryId);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Category Update Successfully.',
      data: result,
    });
  });

  deleteCategory = catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.catId as string;
    const result = await this.service.deleteCategory(categoryId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Category delete successfully.',
    });
  });
}
