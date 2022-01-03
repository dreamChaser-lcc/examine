import React, {
  FC,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import { history, IRouteComponentProps } from 'umi';
// 组件
import Login from '@/pages/login';
import BaseLayout from './baseLayout';
import BaseContext from '@/globalContext';
import BigScreen from '@/pages/echarts-explore/bigScreen';
// 方法
import { useGlobal } from '@/globalContext/hook';
import { user_auth_token_api } from '@/api/user';
import { useLocation } from 'umi';
// 常量
import { SUCCESS_STATUS_CODE } from '@/utils/common_utils';
interface Iprops extends IRouteComponentProps {
  tokenApi?: Function;
}
const LayoutGuard: FC<Iprops> = (props) => {
  const { children, route, tokenApi } = props;
  const curLocation = useLocation();
  const { dispatch, routerTabs } = useGlobal();
  const [isLogin, setLogin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const verifyToken = async () => {
    setIsLoading(false);
    const res = await tokenApi?.();
    setIsLoading(true);
    if (res?.code === SUCCESS_STATUS_CODE) {
      setLogin(true);
    }
  };
  useEffect(() => {
    verifyToken();
  }, [children]);
  console.log('in', isLogin);
  const allRoutes = route.routes;
  const notMenusPage = ['/echarts-explore/bigScreen', '/login'];
  const layoutRender = () => {
    if (isLogin) {
      if (
        !allRoutes?.find((i) => i.path === location.pathname) ||
        notMenusPage.includes(curLocation.pathname)
      ) {
        return children;
      } else {
        return <BaseLayout>{children}</BaseLayout>;
      }
      // if (curLocation.pathname === '/echarts-explore/bigScreen') {
      //   // 数据大屏导航
      //   return <BigScreen />;
      // }
    } else {
      return <Login>{children}</Login>;
    }
  };
  return (
    <BaseContext.Provider value={{ isLogin, dispatch, routerTabs }}>
      {isLoading && layoutRender()}
    </BaseContext.Provider>
  );
};

export default LayoutGuard;
