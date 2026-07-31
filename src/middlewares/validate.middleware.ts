import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/AppError.js';

export const validate = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!schema) return next();

    // Parse / Validate incoming request body, query, or params
    const result = schema.safeParse
      ? schema.safeParse(req.body)
      : { success: true, data: req.body };

    if (!result.success) {
      const errorMessage = result.error.errors.map((e: any) => e.message).join(', ');
      return next(new AppError(`Validation Error: ${errorMessage}`, 400));
    }

    req.body = result.data;
    next();
  };
};
