import type { Role } from '../../../prisma/generate/index.js';

export type UserResponseDTO = {
  id: string;
  firstName: string;
  lastName: string | null;
  email: string;
  role: string;
};

export type JwTPayloadDTO = {
  userId: string;
  role: Role;
};
