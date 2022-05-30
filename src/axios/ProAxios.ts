// dependence
import axios, { AxiosRequestConfig } from 'axios';
// 常量
import { SUCCESS_STATUS_CODE } from '@/utils/common_utils';
import { notification } from 'antd';
import { IProAxios } from './typings';

const BASE_TARGET = 'http://localhost:8080';

const ERROR_TIMEOUT = '网络连接超时';
/**状态码对应提示信息 */
const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**封装的proAxios */
class ProAxios implements IProAxios {
  private myAxios;
  carryToken = false;
  constructor(carryToken = false) {
    this.myAxios = axios.create();
    this.carryToken = carryToken ?? false;
    this.init();
  }
  getAxios() {
    return this.myAxios;
  }
  getToken() {
    let token = window.localStorage.getItem('token');
    if (token) return 'Bearer ' + token;
    return undefined;
  }
  init() {
    const myAxios = this.myAxios;
    myAxios.defaults.timeout = 2500;
    this.setUpInterceptors();
  }
  setUpInterceptors() {
    /**发送请求成功之前回调 */
    const fulfilled = (config: AxiosRequestConfig) => {
      // 比如可添加token
      if (this.carryToken) {
        config.headers.Authorization = this.getToken() ?? '';
      }
      return config;
    };
    /**请求失败回调 */
    const rejected = (error: any) => {
      //请求错误执行
      return Promise.reject(error);
    };
    /**请求拦截器 */
    this.myAxios.interceptors.request.use(fulfilled, rejected);
    /**响应拦截器 */
    this.myAxios.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.code === SUCCESS_STATUS_CODE) {
            return data;
          } else {
            notification.warn({
              message: data.code,
              description: data.message,
            });
          }
        }
      },
      (error) => {
        // 响应状态码大于200 触发回调
        const status = error.response?.status as number;
        const data = error.response?.data;
        if (status === 500 && data?.message) {
          console.log(error.response);
          notification.warn({
            message: data.code,
            description: data.message,
          });
        } else {
          notification.error({
            message: status,
            description: codeMessage?.[status] || ERROR_TIMEOUT,
          });
        }
      },
    );
  }
}
export default ProAxios;

/**测试封装 */
// export function admin_login_api(params: any) {
//   const proAxios = new ProAxios(false).getAxios();
//   return new Promise((resolve, reject) => {
//     proAxios({
//       method: 'post',
//       url: `user/login`,
//       data: {
//         ...params,
//       },
//       responseType: 'json',
//     })
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
