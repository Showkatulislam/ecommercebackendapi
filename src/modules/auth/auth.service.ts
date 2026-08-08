import { AppError } from '../../utils/AppError.js';
import { hashedPassword, hashRefreshToken, verifyPassword } from '../../utils/auth.helper.js';
import { createAccessToken, createRefreshToken } from '../../utils/jwt.helper.js';
import type { IAuthRepository } from './auth.interface.js';
import { toJWTPayload, toUserResponse } from './auth.mapper.js';
import type { LoginUserDTO, RefreshTokenDTO, RegisterUserDTO } from './auth.schema.js';
export class AuthService {
  private readonly authrepository;
  constructor(rep: IAuthRepository) {
    this.authrepository = rep;
  }
  async registerUser(body: RegisterUserDTO) {
    const { email, password } = body;
    const existingUser = await this.authrepository.findByUserEmail(email);

    if (existingUser) {
      throw new AppError('User already exist.', 409);
    }

    const hashedPasswordValue = await hashedPassword(password);
    body.password = hashedPasswordValue;

    const newUser = await this.authrepository.createUser(body);

    const token = createAccessToken(newUser.id, newUser.role);
    const refreshToken = createRefreshToken(newUser.id, newUser.role);
    const hashedRefreshToken = hashRefreshToken(refreshToken);
    await this.authrepository.createRefreshToken({
      token: hashedRefreshToken,
      userId: newUser.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return {
      user: toUserResponse(newUser),
      token,
      refreshToken,
    };
  }
  async loginUser(body: LoginUserDTO) {
    const { email, password } = body;
    console.log(email);

    const existingUser = await this.authrepository.findByUserEmail(email);

    if (!existingUser) {
      throw new AppError('User UnAuthorized.', 404);
    }

    const isCorrectPassword = await verifyPassword(password, existingUser.password);

    if (!isCorrectPassword) {
      throw new AppError('Invalid credentials', 401);
    }

    const jwtPayload = toJWTPayload(existingUser);

    const token = createAccessToken(jwtPayload.userId, jwtPayload.role);
    const refreshToken = createRefreshToken(jwtPayload.userId, jwtPayload.role);
    const hashedRefreshToken = hashRefreshToken(refreshToken);

    await this.authrepository.createRefreshToken({
      token: hashedRefreshToken,
      userId: jwtPayload.userId,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    });

    return {
      user: toUserResponse(existingUser),
      token,
      refreshToken,
    };
  }
  async getCurrentUser(userId: string) {
    const user = await this.authrepository.getcurrentUser(userId);
    return toUserResponse(user);
  }
  async logOutUser(body: RefreshTokenDTO) {
    const { refreshToken } = body;
    const hashedRefreshToken = hashRefreshToken(refreshToken);
    const existingRefeshToken = await this.authrepository.findRefreshToken(hashedRefreshToken);
    if (!existingRefeshToken) {
      throw new AppError('Invalid refresh Token.', 404);
    }

    await this.authrepository.deleteRefreshTokenByToken(hashedRefreshToken);

    return true;
  }
  async logOutAllDevice(userId: string) {
    await this.authrepository.deleteAllRefreshTokenByUserId(userId);
    return true;
  }
}
