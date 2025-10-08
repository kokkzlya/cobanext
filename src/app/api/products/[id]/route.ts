import "reflect-metadata";
import { NextRequest } from "next/server";

import { getProductByIdAction } from "../../../../lib/di/hook";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, ctx: RouteContext) {
  const { id } = await ctx.params;
  const productAction = await getProductByIdAction();
  const product = await productAction.execute(id);
  return Response.json({ ...product });
}
