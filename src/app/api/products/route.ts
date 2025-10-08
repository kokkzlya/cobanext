import "reflect-metadata";
import { NextRequest, NextResponse } from "next/server";

import { createProductAction, getProductsAction } from "../../../lib/di/hook";

export async function GET() {
  const productsAction = await getProductsAction();
  const products = await productsAction.execute();
  return NextResponse.json({ data: products });
}

export async function POST(req: NextRequest) {
  const productAction = await createProductAction();
  const body = await req.json();
  const newProduct = await productAction.execute({
    name: body.name!,
    price: body.price!,
  });
  return NextResponse.json({ data: newProduct });
}
