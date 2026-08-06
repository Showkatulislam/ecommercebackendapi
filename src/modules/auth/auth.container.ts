import { AuthController } from './auth.controller.js';
import { AuthRepository } from './auth.repository.js';
import { AuthService } from './auth.service.js';

const authrepository = new AuthRepository();

const authService = new AuthService(authrepository);

export const authController = new AuthController(authService);
