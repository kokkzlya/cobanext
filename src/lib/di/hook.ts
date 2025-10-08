import container from "./container";

import {
  createProductActionId,
  getProductByIdActionId,
  getProductsActionId,
} from "../../domain/usecases/product.action";

export const createProductAction = async () =>
  container.getAsync(createProductActionId);
export const getProductByIdAction = async () =>
  container.getAsync(getProductByIdActionId);
export const getProductsAction = async () =>
  container.getAsync(getProductsActionId);
