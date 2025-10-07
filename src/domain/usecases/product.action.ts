import "reflect-metadata";
import { inject, injectable } from "inversify";

import { Product } from "../models/product";
import { ProductService } from "../../infra/dummy/product.service";
import * as types from "../../lib/di/types";

@injectable()
export class GetProductByIdAction {
  @inject(types.productServiceId)
  private productService!: ProductService;

  async execute(id: string): Promise<Product | null> {
    return this.productService.getProductById(id);
  }
}

@injectable()
export class GetProductsAction {
  @inject(types.productServiceId)
  private productService!: ProductService;

  async execute(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}
