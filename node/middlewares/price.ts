export async function price(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { price },
  } = ctx

  const data = await price.getPrice('2')
  ctx.body = data

  await next()
}
