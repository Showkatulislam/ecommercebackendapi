import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';
import type { JwtPayload } from '../shared/types/express.js';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.cookies?.accessToken;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Unauthorized access. Token missing.', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    // ১. jwt.verify থেকে টোকেন ডিকোড করুন
    const decoded = jwt.verify(token as string, env.JWT_SECRET) as unknown as JwtPayload;

    // ২. প্রয়োজনীয় ডাটা বিদ্যমান কি না চেক করতে পারেন
    if (!decoded.userId || !decoded.role) {
      return next(new AppError('Invalid token payload.', 401));
    }

    req.user = decoded;
    next();
  } catch (err) {
    return next(new AppError('Invalid or expired token.', 401));
  }
};
export const authorize = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(new AppError('Forbidden. Insufficient permissions.', 403));
    }
    next();
  };
};
