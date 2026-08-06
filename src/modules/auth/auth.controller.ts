import type { Request, Response } from 'express';
import { sendResponse } from '../../utils/sendResponse.js';
import { catchAsync } from '../../utils/catchAsync.js';
import { AuthService } from './auth.service.js';
import { destroyCookies, setCookie } from '../../utils/auth.helper.js';
export class AuthController {
  private readonly authService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }
  registerUser = catchAsync(async (req: Request, res: Response) => {
    const result = await this.authService.registerUser(req.body);

    setCookie(res, result.token, result.refreshToken);
    return sendResponse(res, {
      statusCode: 200,
      message: 'User created Successfully.',
      success: true,
      data: result,
    });
  });

  loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await this.authService.loginUser(req.body);
    setCookie(res, result.token, result.refreshToken);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: 'User login successfully.',
    });
  });
    
    getCurrentUser = catchAsync(async (req: Request, res: Response) => {
        const result = await this.authService.getCurrentUser(req.user?.userId!)
      sendResponse(res, {
        statusCode: 200,
        success: true,
        data:result,
        message:"User fetch Successfully."
        })
    })
  
  logOutUser = catchAsync(async(req:Request,res:Response) => {
    const islogOut = await this.authService.logOutUser(req.body)
    if (islogOut) {
      destroyCookies(res)
    }
    sendResponse(res, {
      message: "User deleted successfully.",
      statusCode: 200,
      success:true,
    })
  })
  logOutAllDevice = catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.userId
    console.log(userId)
    const logoutAllDevice = await this.authService.logOutAllDevice(userId!)
    if (logoutAllDevice) {
      destroyCookies(res)
    }
    sendResponse(res, {
      statusCode: 200,
      success:true
    })
  })
}
