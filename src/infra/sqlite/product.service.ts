import { v4 as uuidv4 } from "uuid";

import { ServiceIdentifier, inject, injectable } from "inversify";
import { Repository } from "typeorm";

import { Product as ProductEntity } from "./product.entity";
import { productRepositoryId } from "./product.repository";
import { Product } from "../../domain/models/product";

@injectable()
export class ProductService {
  @inject(productRepositoryId)
  private readonly productRepository!: Repository<ProductEntity>;

  async getAllProducts(): Promise<Product[]> {
    return (await this.productRepository.find()).map((p) => ({ ...p }));
  }

  async getProductById(id: string): Promise<Product | null> {
    const product = await this.productRepository.findOneBy({ id });
    return product ? { ...product } : null;
  }

  async createProduct(product: Partial<Product>): Promise<Product> {
    const newProduct = {
      ...product,
      id: uuidv4(),
    };
    const savedProduct = await this.productRepository.save(newProduct);
    return { ...savedProduct };
  }
}

export const productServiceId: ServiceIdentifier<ProductService> =
  Symbol("ProductServiceId");
