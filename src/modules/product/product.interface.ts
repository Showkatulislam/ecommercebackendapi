import type { Prisma, Product } from '../../../prisma/generate/index.js';
import type { EditProductSchemaDTO, ProductSchemaDTO } from './product.schema.js';

export interface IProductInterface {
  createProduct(data: {
    createdById: string;
    categoryId: string;
    productName: string;
    productDesc: string;
    productImages: string[];
    price: any;
    stock: number;
  }): Promise<Product>;
  getProductById(productId: string): Promise<Product | null>;
  getAllActiveProduct(): Promise<Product[]>;
  getAllProduct(): Promise<Product[]>;
  getProductByCategory(catId: string): Promise<Product[]>;
  editProductById(data: EditProductSchemaDTO, productId: string): Promise<Product>;
  deleteProductById(productId: string): Promise<any>;
}
