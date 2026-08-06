import { ProductController } from "./product.controller.js";
import { ProductRepository } from "./product.repository.js";
import { ServicePrdouct } from "./product.service.js";

const productrespository = new ProductRepository()
const servicePrdouct = new ServicePrdouct(productrespository)
export const productController = new ProductController(servicePrdouct)