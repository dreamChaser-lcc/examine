import React, {
  FC,
  useCallback,
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
import { message } from 'antd';
interface Iprops extends IRouteComponentProps {
  tokenApi?: Function;
}
const LayoutGuard: FC<Iprops> = (props) => {
  const { children, route, tokenApi } = props;
  const curLocation = useLocation();
  const { dispatch, routerTabs } = useGlobal();
  const [isLogin, setLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const verifyToken = async () => {
    setIsLoading(false);
    const res = await tokenApi?.();
    if (res?.code !== SUCCESS_STATUS_CODE) {
      window.location.href = `${window.location.origin}/#/login`;
    }else{
      setIsLoading(true);
    }
  };
  // useEffect(() => {
  //   verifyToken();
  // }, [children]);
  console.log('in', isLogin);
  const allRoutes = route.routes;
  const notMenusPage = ['/echarts-explore/bigScreen', '/login'];
  const layoutRender = useCallback(() => {
    if (notMenusPage.includes(curLocation.pathname)) {
      return children;
    }
    return (
      isLoading && (
        <BaseLayout
          showMenus={!notMenusPage.includes(curLocation.pathname) && isLoading}
        >
          {children}
        </BaseLayout>
      )
    );
  }, [curLocation.pathname, isLoading]);
  return (
    <BaseContext.Provider value={{ isLogin, dispatch, routerTabs }}>
      {layoutRender()}
    </BaseContext.Provider>
  );
};

export default LayoutGuard;
