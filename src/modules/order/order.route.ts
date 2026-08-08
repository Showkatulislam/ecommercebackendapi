import { Router } from 'express';
import { authenticate, verifySeller } from '../../middlewares/auth.middleware.js';
import { orderController } from './order.container.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createOrderSchema } from './order.schema.js';

const router = Router();

router
  .route('/create')
  .post(validate(createOrderSchema), authenticate, verifySeller, orderController.create);

export default router;
