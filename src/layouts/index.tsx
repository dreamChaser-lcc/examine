import React, { useMemo, useState } from 'react';
import { IRouteComponentProps } from 'umi';
// 组件
import BigScreen from '@/pages/echarts-explore/bigScreen';
import Login from './subpage/login';
import BaseLayout from './subpage/baseLayout';
// 方法
import { useLocation } from 'umi';

export default function ({
  children,
  location,
  route,
  history,
  match,
  ...resprops
}: IRouteComponentProps) {
  const [isLogin, setIslogin] = useState<boolean>(true);
  const curLocation = useLocation();
  // console.log(route, resprops);
  const allRoutes = route.routes;
  if (!allRoutes?.find((i) => i.path === location.pathname)) {
    return children;
  }
  if (curLocation.pathname)
    if (curLocation.pathname === '/echarts-explore/bigScreen') {
      // 数据大屏导航
      return <BigScreen />;
    }
  return isLogin ? (
    <BaseLayout>{children}</BaseLayout>
  ) : (
    <Login>{children}</Login>
  );
}
