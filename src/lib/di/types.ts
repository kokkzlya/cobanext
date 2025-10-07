import { ServiceIdentifier } from "inversify";

import { ProductService } from "../../infra/dummy/product.service";
import {
  GetProductByIdAction,
  GetProductsAction,
} from "@front/domain/usecases/product.action";

export const productServiceId: ServiceIdentifier<ProductService> =
  Symbol("ProductServiceId");
export const getProductByIdActionId: ServiceIdentifier<GetProductByIdAction> =
  Symbol("GetProductByIdActionId");
export const getProductsActionId: ServiceIdentifier<GetProductsAction> = Symbol(
  "GetProductsActionId",
);
