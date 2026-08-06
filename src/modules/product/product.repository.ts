import type { Product } from "../../../prisma/generate/index.js";
import type { IProductInterface } from "./product.interface.js";
import type { ProductSchemaDTO } from "./product.schema.js";

export class ProductRepository implements IProductInterface{
    async createProduct(data: ProductSchemaDTO): Promise<Product> {
        
    }
}