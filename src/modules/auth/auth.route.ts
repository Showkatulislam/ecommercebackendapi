import { Router } from 'express';
import { authController } from './auth.container.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { loginUserSchema, refreshTokenSchema, RegisterUserSchema } from './auth.schema.js';
import { authenticate } from '../../middlewares/auth.middleware.js';

const authRouter = Router();

authRouter.post('/register', validate(RegisterUserSchema), authController.registerUser);
authRouter.post('/login', validate(loginUserSchema), authController.loginUser);

authRouter.get("/me", authenticate, authController.getCurrentUser)

authRouter.post("/logout",validate(refreshTokenSchema),authController.logOutUser)

authRouter.post("/logout-all-device",authenticate,authController.logOutAllDevice)

export default authRouter;
