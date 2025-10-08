import {
  Entity as entity,
  PrimaryColumn as primaryColumn,
  Column as column,
} from "typeorm";

@entity("product")
export class Product {
  @primaryColumn()
  id!: string;

  @column()
  name!: string;

  @column()
  price!: number;
}
