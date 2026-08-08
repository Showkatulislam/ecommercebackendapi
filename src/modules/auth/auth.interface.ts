import type { RefreshToken, User } from '../../../prisma/generate/index.js';
import type { RegisterUserDTO } from './auth.schema.js';

export interface IAuthRepository {
  findByUserEmail(email: string): Promise<User | null>;
  findByUserName(username: string): Promise<User | null>;
  createUser(data: RegisterUserDTO): Promise<User>;
  createRefreshToken(data: {
    token: string;
    userId: string;
    expiresAt: Date;
  }): Promise<RefreshToken>;
  getcurrentUser(userId: string): Promise<User>;
  findRefreshToken(token: string): Promise<RefreshToken | null>;
  deleteRefreshTokenByToken(token: string): Promise<any>;
  deleteAllRefreshTokenByUserId(userId: string): Promise<any>;
}
