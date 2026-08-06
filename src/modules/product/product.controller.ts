import type { Response,  Request } from "express"
import { catchAsync } from "../../utils/catchAsync.js"
import { sendResponse } from "../../utils/sendResponse.js"
import type { ServicePrdouct } from "./product.service.js"

export class ProductController{
    constructor(private service: ServicePrdouct) {}
    createProduct = catchAsync(async (req:Request,res:Response) => {
        const result = await this.service.createProduct(req.body, req.user?.userId!)
        sendResponse(res, {
            message:"Product created Successfully.",
            statusCode: 200,
            success: true,
            data:result
        })
    })
}