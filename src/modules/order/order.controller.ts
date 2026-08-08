import type { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync.js';
import type { OrderService } from './order.service.js';
import { sendResponse } from '../../utils/sendResponse.js';

export class OrderController {
  constructor(private service: OrderService) {}
  create = catchAsync(async (req: Request, res: Response) => {
    const result = await this.service.create(req.user?.userId!, req.body);

    sendResponse(res, {
      message: 'Order created succesfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
}
