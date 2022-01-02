import {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface IProAxios {
  /**是否携带token */
  carryToken?: boolean;
  /**获取axios实例 */
  getAxios: () => AxiosInstance;
  init: () => void;
  /**获取本地储存token */
  getToken: () => string | undefined;
  /**设置拦截器 */
  setUpInterceptors: () => void;
}

export interface IResponse {
  code: any;
  message: string;
  result?: any;
}
export type TResponse = Promise<IResponse | undefined>;
