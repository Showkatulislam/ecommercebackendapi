import { Router } from 'express';
import { authenticate, verifyAdmin, verifySeller } from '../../middlewares/auth.middleware.js';
import { validate } from '../../middlewares/validate.middleware.js';
import { productController } from './product.container.js';
import { createProductSchema, editProductSchema } from './product.schema.js';
import { upload } from '../../middlewares/multer.middleware.js';

const router = Router();

router.post(
  '/create',
  authenticate,
  verifySeller,
  upload.array('images', 2),
  validate(createProductSchema),
  productController.createProduct
);
router.route('/all-active-product').get(productController.getAllActiveProduct);

router.route('/all-product').get(productController.getAllProduct);

router.route('/category/:catId').get(productController.getAllProductByCategory);

router
  .route('/:productId')
  .patch(
    validate(editProductSchema),
    authenticate,
    verifySeller,
    productController.editProductbyId
  );
router.route('/:productId').delete(productController.deleteProduct);

export default router;
