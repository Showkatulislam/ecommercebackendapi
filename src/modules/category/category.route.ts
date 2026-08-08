import { Router } from 'express';
import { authenticate, verifyAdmin } from '../../middlewares/auth.middleware.js';
import { categoryController } from './category.container.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { createCategorySchema, updateCategorySchema } from './category.schema.js';

const router = Router();

router
  .route('/create')
  .post(
    validate(createCategorySchema),
    authenticate,
    verifyAdmin,
    categoryController.createCategory
  );
router.route('/get-all-category').get(categoryController.getAllCategory);

router
  .route('/:catId')
  .patch(
    validate(updateCategorySchema),
    authenticate,
    verifyAdmin,
    categoryController.updateCategory
  );

router.route('/:catId').delete(authenticate, verifyAdmin, categoryController.deleteCategory);

export default router;
