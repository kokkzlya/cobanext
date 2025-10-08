import "reflect-metadata";
import { ServiceIdentifier, inject, injectable } from "inversify";

import { Product } from "../models/product";
import {
  ProductService,
  productServiceId,
} from "../../infra/sqlite/product.service";

@injectable()
export class CreateProductAction {
  @inject(productServiceId)
  private productService!: ProductService;

  async execute(product: Partial<Product>): Promise<Product> {
    return this.productService.createProduct(product);
  }
}

@injectable()
export class GetProductByIdAction {
  @inject(productServiceId)
  private productService!: ProductService;

  async execute(id: string): Promise<Product | null> {
    return this.productService.getProductById(id);
  }
}

@injectable()
export class GetProductsAction {
  @inject(productServiceId)
  private productService!: ProductService;

  async execute(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}

export const createProductActionId: ServiceIdentifier<CreateProductAction> =
  Symbol("CreateProductActionId");
export const getProductByIdActionId: ServiceIdentifier<GetProductByIdAction> =
  Symbol("GetProductByIdActionId");
export const getProductsActionId: ServiceIdentifier<GetProductsAction> = Symbol(
  "GetProductsActionId",
);
