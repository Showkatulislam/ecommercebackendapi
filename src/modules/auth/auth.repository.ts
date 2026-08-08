import type { IAuthRepository } from './auth.interface.js';
import { prisma } from '../../lib/prisma.js';
import type { RegisterUserDTO } from './auth.schema.js';
import type { RefreshToken, User } from '../../../prisma/generate/index.js';
import { AppError } from '../../utils/AppError.js';

export class AuthRepository implements IAuthRepository {
  async findByUserEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return result;
  }
  async findByUserName(username: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: {
        userName: username,
      },
    });
    return result;
  }
  async createUser(data: RegisterUserDTO): Promise<User> {
    console.log(data);
    return prisma.user.create({
      data: {
        userName: data.userName,
        firstName: data.firstName,
        lastName: data.lastName ?? '',
        email: data.email,
        password: data.password,
      },
    });
  }

  async createRefreshToken(data: { token: string; userId: string; expiresAt: Date }) {
    const token = await prisma.refreshToken.create({
      data,
    });

    return token;
  }
  async getcurrentUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  }
  async findRefreshToken(token: string): Promise<RefreshToken | null> {
    const result = await prisma.refreshToken.findUnique({
      where: {
        token,
      },
    });
    return result;
  }
  async deleteRefreshTokenByToken(token: string): Promise<any> {
    return await prisma.refreshToken.delete({
      where: {
        token,
      },
    });
  }
  async deleteAllRefreshTokenByUserId(userId: string) {
    return await prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }
}
