import container from "./container";
import * as types from "./types";

export const getProductByIdAction = () =>
  container.get(types.getProductByIdActionId);
export const getProductsAction = () => container.get(types.getProductsActionId);
