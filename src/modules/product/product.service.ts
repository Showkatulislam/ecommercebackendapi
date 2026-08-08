import type { FileStorage } from '../../shared/storage/storage.interface.js';
import { AppError } from '../../utils/AppError.js';
import { getPublicId } from '../../utils/getPublicId.js';
import type { IProductInterface } from './product.interface.js';
import type { EditProductSchemaDTO, ProductSchemaDTO } from './product.schema.js';

export class ServicePrdouct {
  constructor(
    private repository: IProductInterface,
    private storage: FileStorage
  ) {}
  async createProduct(data: ProductSchemaDTO, userId: string, files: Express.Multer.File[]) {
    if (!files || files.length == 0) {
      throw new AppError('At least one product image is required', 400);
    }

    const uploadedImages = await Promise.all(
      files.map((file) => this.storage.upload(file, 'products'))
    );
    const imageUrls = uploadedImages.map((img) => img.secure_url);
    return this.repository.createProduct({
      createdById: userId,
      productName: data.productName,
      productDesc: data.productDesc,
      price: Number(data.stock),
      stock: Number(data.stock),
      productImages: imageUrls,
      categoryId: data.categoryId,
    });
  }
  async getAllProduct() {
    const products = await this.repository.getAllProduct();
    return products;
  }
  async getAllActiveProduct() {
    const products = await this.repository.getAllActiveProduct();
    return products;
  }
  async getAllProductCategory(catId: string) {
    const products = await this.repository.getProductByCategory(catId);
    return products;
  }
  async editProductByProductId(data: EditProductSchemaDTO, productId: string) {
    const product = await this.repository.getProductById(productId);
    if (!product) {
      throw new AppError('Product not found.', 404);
    }
    const editProduct = await this.repository.editProductById(data, productId);
    return editProduct;
  }

  async deleteProductById(productId: string) {
    const product = await this.repository.getProductById(productId);
    if (!product) {
      throw new AppError('Product is not exist yet', 404);
    }
    const images = product.productImages as string[];

    await Promise.all(images.map((image) => this.storage.delete(getPublicId(image))));

    await this.repository.deleteProductById(productId);
    return true;
  }
}
