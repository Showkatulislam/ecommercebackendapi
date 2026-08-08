import { CloudinaryStorageService } from '../../shared/storage/CloudinaryStorageService.js';
import { ProductController } from './product.controller.js';
import { ProductRepository } from './product.repository.js';
import { ServicePrdouct } from './product.service.js';

const storageService = new CloudinaryStorageService();
const productrespository = new ProductRepository();
const servicePrdouct = new ServicePrdouct(productrespository, storageService);
export const productController = new ProductController(servicePrdouct);
