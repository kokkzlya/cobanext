import { NextRequest } from "next/server";

import { getProductByIdAction } from "../../../../lib/di/hook";

export async function GET(_req: NextRequest, ctx: RouteContext<"/api/products/[id]">) {
  const { id } = await ctx.params;
  const product = await getProductByIdAction().execute(id);
  return Response.json({ ...product });
}
