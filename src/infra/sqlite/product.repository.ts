import { ServiceIdentifier } from "inversify";
import { Repository } from "typeorm";

import { Product } from "../../infra/sqlite/product.entity";

export const productRepositoryId: ServiceIdentifier<Repository<Product>> =
  Symbol("ProductRepositoryId");
