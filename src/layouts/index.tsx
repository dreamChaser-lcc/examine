import React, { useMemo, useState } from 'react';
// 组件
import BigScreen from '@/pages/echarts-explore/bigScreen';
import Login from './subpage/login';
import BaseLayout from './subpage/baseLayout';
// 方法
import { useLocation } from 'umi';

export default function (props: any) {
  const [isLogin, setIslogin] = useState<boolean>(true);
  const curLocation = useLocation();
  // 数据大屏导航
  if (curLocation.pathname === '/echarts-explore/bigScree') {
    return <BigScreen />;
  }
  return isLogin ? (
    <BaseLayout>{props.children}</BaseLayout>
  ) : (
    <Login>{props.children}</Login>
  );
}
