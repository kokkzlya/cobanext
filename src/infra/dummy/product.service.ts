import { Product } from "../../domain/models/product";

export class ProductService {
  private products = [
    { id: "1", name: "Product A", price: 100 },
    { id: "2", name: "Product B", price: 150 },
    { id: "3", name: "Product C", price: 200 },
  ];

  async getAllProducts() : Promise<Product[]> {
    return Promise.resolve([...this.products]);
  }

  async getProductById(id: string): Promise<Product | null> {
    const found = this.products.filter((p) => p.id === id);
    return !found.length ? null : Promise.resolve({ ...found[0] });
  }
}
