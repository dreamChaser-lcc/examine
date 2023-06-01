/*
 * @Author: lcc
 * @Date: 2022-11-19 21:17:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-06-01 08:50:37
 * @Description:
 */
import { Helmet, IRouteComponentProps } from 'umi';
// 组件
import LayoutGuard from './layoutGuard';
// 方法
import { user_auth_token_api } from '@/api/user';
// 常量
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';

export default function (props: IRouteComponentProps) {
  return (
    <>
      <Helmet>
        <title>MyAdmin</title>
      </Helmet>
      <ConfigProvider locale={zhCN}>
        <LayoutGuard tokenApi={user_auth_token_api} {...props} />;
      </ConfigProvider>
    </>
  );
}
