import type { IProductInterface } from "./product.interface.js";
import type { ProductSchemaDTO } from "./product.schema.js";

export class ServicePrdouct{
    constructor(private repository: IProductInterface) { }
    async createProduct(data: ProductSchemaDTO,userId:string) {
        
    }
}