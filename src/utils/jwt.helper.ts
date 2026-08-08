import type { Role } from '@prisma/client';
import jwt, { type SignOptions } from 'jsonwebtoken';
import { env } from '../config/env.js';
export const createAccessToken = (userId: string, role: Role) => {
  return jwt.sign({ userId, role }, env.JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};

export const createRefreshToken = (userId: string, role: Role) => {
  return jwt.sign({ userId, role }, env.JWT_SECRET, { expiresIn: '30d' });
};
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};
