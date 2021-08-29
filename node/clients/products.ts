import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Products extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, options)
  }

  public async getProducts(params: number): Promise<object> {
    return this.http.get(params.toString(), {
      metric: 'Products-get',
    })
  }

  public async getProductsWithHeaders(
    params: number
  ): Promise<IOResponse<object>> {
    return this.http.getRaw(params.toString(), {
      metric: 'Products-get-raw',
    })
  }
}
