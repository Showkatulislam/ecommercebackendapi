import bcrypt from 'bcryptjs';
import type { Response } from 'express';
import { env } from '../config/env.js';
import crypto from 'crypto';
export const hashedPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

export const verifyPassword = (password: string, hashPassword: string) => {
  return bcrypt.compare(password, hashPassword);
};

export const setCookie = (res: Response, token: string, refreshToken: string) => {
  res.cookie('accessToken', token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.cookie('refreshToken', token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const hashRefreshToken = (refreshToken: string) => {
  return crypto.createHash('sha256').update(refreshToken).digest('hex');
};

export const destroyCookies = (res: Response) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
};
