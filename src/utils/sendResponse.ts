import type { Response } from 'express';

export interface IApiResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?:
    | {
        page?: number;
        limit?: number;
        total?: number;
        totalPage?: number;
      }
    | undefined;
  data?: T | null;
}

export const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || 'Success',
    meta: data.meta || undefined,
    data: data.data !== undefined ? data.data : null,
  };

  res.status(data.statusCode).json(responseData);
};
