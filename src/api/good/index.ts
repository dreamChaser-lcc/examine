import GET from '@/axios/method/get';
import { GOODS } from '../config';

/**
 * 登录api
 * good/list
 * @param pageNum 页数
 * @param pageSize 每页条数
 */
export function good_list_api(pageNum: any, pageSize: any) {
  return GET(`${GOODS}/list1`, { pageNum, pageSize });
}
