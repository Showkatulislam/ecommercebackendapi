import type { Category } from "../../../prisma/generate/index.js"
import type { CreateCategoryDTO, updateCategoryDTO } from "./category.schema.js"

export interface IcategoryInterface{
    createCategory(data: CreateCategoryDTO): Promise<Category>
    getAllCategory(): Promise<Category[] | null>
    getCategoryById(categoryId:string):Promise<Category | null>
    updateCategory(date:updateCategoryDTO,categoryId:string):Promise<Category>
    deleteCategory(categoryId:string):Promise<any>
}