import { NextResponse } from "next/server";

import { getProductsAction } from "../../../lib/di/hook";

export async function GET() {
  const products = await getProductsAction().execute();
  return NextResponse.json({ data: products });
}
