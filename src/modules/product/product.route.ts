import { Router } from "express";
import { authenticate, verifyAdmin } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { productController } from "./product.container.js";
import { createProductSchema } from "./product.schema.js";


const router = Router()

router.route("/create").post(validate(createProductSchema), authenticate, verifyAdmin, productController.createProduct)


export default router