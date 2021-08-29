export async function productsId(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
    clients: { catalog },
  } = ctx
  const { code } = params
  console.log(code)
  const data = await catalog.getSkuById(code.toString())

  ctx.body = data

  await next()
}
