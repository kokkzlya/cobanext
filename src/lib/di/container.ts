import { Container } from "inversify";

import {
  GetProductByIdAction,
  GetProductsAction,
} from "../../domain/usecases/product.action";
import { ProductService } from "../../infra/dummy/product.service";

const container = new Container();

container.bind(ProductService).to(ProductService);
container.bind(GetProductByIdAction).to(GetProductByIdAction);
container.bind(GetProductsAction).to(GetProductsAction);

export default container;
