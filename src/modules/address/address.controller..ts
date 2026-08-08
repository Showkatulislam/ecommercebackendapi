import type { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync.js';
import type { addressService } from './address.service.js';
import { sendResponse } from '../../utils/sendResponse.js';

export class AddressController {
  constructor(private service: addressService) {}
  create = catchAsync(async (req: Request, res: Response) => {
    req.body.userId = req.user?.userId;
    const result = await this.service.create(req.body);
    sendResponse(res, {
      message: 'Address is created successfully.',
      statusCode: 200,
      success: true,
      data: result,
    });
  });
}
