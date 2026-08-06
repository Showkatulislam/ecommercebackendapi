import type { Request, Response, NextFunction } from 'express';
import { ZodError, ZodObject } from 'zod';
import { AppError } from '../utils/AppError.js';

export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate incoming request structure (body, query, params)
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      // Replace req.body with the sanitized/parsed data
      req.body = parsed.body;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // ZodError provides an 'issues' array cleanly
        const errorMessage = error.issues
          .map((issue) => `${issue.path.slice(1).join('.')}: ${issue.message}`)
          .join(', ');

        return next(new AppError(`Validation Error: ${errorMessage}`, 400));
      }

      next(error);
    }
  };
};
