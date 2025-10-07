import { Container } from "inversify";

import * as types from "./types";
import {
  GetProductByIdAction,
  GetProductsAction,
} from "../../domain/usecases/product.action";
import { ProductService } from "../../infra/dummy/product.service";

const container = new Container();

container.bind(types.productServiceId).to(ProductService);
container.bind(types.getProductByIdActionId).to(GetProductByIdAction);
container.bind(types.getProductsActionId).to(GetProductsAction);

export default container;
