import POST from '@/axios/method/post';
import { USER } from '../config';

/**
 * 登录api
 * user/login
 * @param user_name 用户名
 * @param password 密码
 */
export function user_login_api(user_name: any, password: any) {
  return POST(`${USER}/login`, { user_name, password }, false);
}
/**
 * 验证token是否有效
 * user/auth/token
 */
export function user_auth_token_api() {
  return POST(`${USER}/auth/token`);
}
