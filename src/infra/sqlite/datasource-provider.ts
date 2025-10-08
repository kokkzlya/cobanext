import { DataSource } from "typeorm";
import { Product } from "./product.entity";

export class DataSourceProvider {
  private static instance: DataSource;

  private constructor() {}

  static getInstance(): DataSource {
    if (!DataSourceProvider.instance) {
      DataSourceProvider.instance = new DataSource({
        type: "sqlite",
        database: "/tmp/database.sqlite",
        synchronize: true,
        logging: false,
        entities: [Product],
        migrations: [],
        subscribers: [],
      });
    }

    return DataSourceProvider.instance;
  }

  static async getInitializedInstance(): Promise<DataSource> {
    const instance = DataSourceProvider.getInstance();
    if (!instance.isInitialized) {
      await instance.initialize();
    }

    return instance;
  }
}
