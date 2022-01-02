import { IRouteComponentProps } from 'umi';
// 组件
import LayoutGuard from './layoutGuard';
// 方法
import { user_auth_token_api } from '@/api/user';

export default function (props: IRouteComponentProps) {
  return <LayoutGuard tokenApi={user_auth_token_api} {...props} />;
}
