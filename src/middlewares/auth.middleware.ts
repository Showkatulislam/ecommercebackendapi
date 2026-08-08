import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';
import { env } from '../config/env.js';
import type { JwtPayload } from '../shared/types/express.js';
import { Role } from '../../prisma/generate/index.js';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader =
    req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '');
  if (!authHeader) {
    return next(new AppError('Unauthorized access. Token missing.', 401));
  }

  const token = authHeader;
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

export const verifySeller = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== Role.SELLER) {
    throw new AppError('You are not authorized.', 401);
  }
  next();
};

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== Role.ADMIN) {
    throw new AppError('You are not authorized.', 401);
  }
  next();
};
