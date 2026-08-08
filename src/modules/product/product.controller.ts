import type { Response, Request } from 'express';
import { catchAsync } from '../../utils/catchAsync.js';
import { sendResponse } from '../../utils/sendResponse.js';
import type { ServicePrdouct } from './product.service.js';

export class ProductController {
  constructor(private service: ServicePrdouct) {}
  createProduct = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    const result = await this.service.createProduct(
      req.body,
      userId!,
      req.files as Express.Multer.File[]
    );

    sendResponse(res, {
      message: 'Product created Successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
  getAllActiveProduct = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.getAllActiveProduct();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      data: result,
    });
  });
  getAllProduct = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.getAllProduct();
    sendResponse(res, {
      message: 'product fetch successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
  getAllProductByCategory = catchAsync(async (req: Request, res: Response) => {
    const catId = req.params.catId as string;
    const result = await this.service.getAllProductCategory(catId);

    sendResponse(res, {
      message: 'Product fetch Successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
  editProductbyId = catchAsync(async (req: Request, res: Response) => {
    const productId = req.params.productId as string;
    console.log(productId);
    const result = await this.service.editProductByProductId(req.body, productId);
    sendResponse(res, {
      message: 'Product update Successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
  deleteProduct = catchAsync(async (req: Request, res: Response) => {
    const productId = req.params.productId as string;
    const result = await this.service.deleteProductById(productId);
    sendResponse(res, {
      message: 'Product delete successfully.',
      statusCode: 200,
      success: true,
    });
  });
}
