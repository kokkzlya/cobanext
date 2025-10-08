import { Container } from "inversify";

import {
  CreateProductAction,
  GetProductByIdAction,
  GetProductsAction,
  createProductActionId,
  getProductByIdActionId,
  getProductsActionId,
} from "../../domain/usecases/product.action";
import { DataSourceProvider } from "../../infra/sqlite/datasource-provider";
import { Product } from "../../infra/sqlite/product.entity";
import { productRepositoryId } from "../../infra/sqlite/product.repository";
import {
  ProductService,
  productServiceId,
} from "../../infra/sqlite/product.service";

const container = new Container();

// Repositories
container.bind(productRepositoryId).toDynamicValue(async () => {
  const datasource = await DataSourceProvider.getInitializedInstance();
  return datasource.getRepository(Product);
});

// Services
container.bind(productServiceId).to(ProductService);

// Use Cases
container.bind(createProductActionId).to(CreateProductAction);
container.bind(getProductByIdActionId).to(GetProductByIdAction);
container.bind(getProductsActionId).to(GetProductsAction);

export default container;
