import type { Product } from "../../../prisma/generate/index.js";
import type { ProductSchemaDTO } from "./product.schema.js";

export interface IProductInterface{
    createProduct(data:ProductSchemaDTO):Promise<Product>
}