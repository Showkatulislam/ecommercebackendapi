import { Router } from 'express';
import { authenticate, verifySeller } from '../../middlewares/auth.middleware.js';
import { addressController } from './address.container.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createAddresSchema } from './address.schema.js';

const router = Router();

router
  .route('/create')
  .post(validate(createAddresSchema), authenticate, verifySeller, addressController.create);

export default router;
