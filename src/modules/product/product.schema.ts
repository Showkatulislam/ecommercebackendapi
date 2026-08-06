import z from "zod";

export const createProductSchema = z.object({
    body: z.object({
        categoryId:z.string(),
        productName: z.string().min(2, "Product name is required."),
        productDesc: z.string().min(2, "Description is required."),
        price: z.number(),
        stock:z.number()
    })
})

export type ProductSchemaDTO = z.infer<typeof createProductSchema>['body']

