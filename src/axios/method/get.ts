import ProAxios from '@/axios/ProAxios';
import { TResponse } from '../typings';
/**
 * post 请求
 * @param url 请求地址
 * @param params 请求参数（可传泛型）
 * @param carryToken 是否携带token参数
 */
function GET(url: string, params?: any, carryToken = false): TResponse {
  let proAxios = new ProAxios(carryToken).getAxios();
  // !!!bug 未找到合适的方法定义返回类型,故先ts-ignore并强制指定返回类型
  // @ts-ignore
  return proAxios({
    method: 'get',
    url,
    params: {
      ...params,
    },
    responseType: 'json',
  }) as TResponse;
}
export default GET;
