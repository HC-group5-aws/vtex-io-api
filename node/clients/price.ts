import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'
import axios from 'axios'
// import { head } from 'ramda';

export default class Products extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...(options && options.headers),
        ...(ctx.storeUserAuthToken
          ? { VtexIdclientAutCookie: ctx.storeUserAuthToken }
          : null),
        'x-vtex-user-agent': ctx.userAgent,
      },
    })
  }

  public async getPriceID(): Promise<any> {
    return await axios.get(URL.toString(), {})
  }

  URL = 'https://api.vtex.com/hiringcoders202105/pricing/prices/1'
}
//'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202105-EJCXZI',
// 'X-VTEX-API-AppToken':
//   'RTYLCPZHHHETKOTWZGDNHCDHMBBCLZPUFLOGYPRLCKSXBBUBFNENKKQPQRZBNXVISJNYZMXKPRLXKFGKGZWYUBKVVZQHPPYFOJFROVCTPUYSZSEKKOUOAXOQYRCAWPUZ',
// 'Content-Type': 'application/json',
