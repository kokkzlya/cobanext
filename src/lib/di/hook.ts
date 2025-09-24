import container from "./container";
import { GetProductByIdAction, GetProductsAction } from "../../domain/usecases/product.action";

export const getProductByIdAction = () => container.get(GetProductByIdAction);
export const getProductsAction = () => container.get(GetProductsAction);
