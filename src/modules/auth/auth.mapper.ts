import type { User } from '../../../prisma/generate/index.js';
import type { JwTPayloadDTO, UserResponseDTO } from './auth.response.js';

export const toUserResponse = (user: User): UserResponseDTO => {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName ?? '',
    email: user.email,
    role: user.role,
  };
};

export const toJWTPayload = (user: User): JwTPayloadDTO => {
  return {
    userId: user.id,
    role: user.role,
  };
};
