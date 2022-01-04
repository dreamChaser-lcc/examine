import React, { FC, lazy } from 'react';

import { IRouteComponentProps } from 'umi';
// 组件
const lazyComponent = import('./baseLayout');
const BaseLayout = lazy(() => lazyComponent);
// import BaseLayout from './baseLayout';
import BaseContext from '@/globalContext';
// 方法
import { useGlobal } from '@/globalContext/hook';
import { useLocation } from 'umi';
// 常量
import { Spin } from 'antd';
import { useVerifyToken } from './hooks/verifytoken';
import { notMenusPage } from '@/contants/common';
interface Iprops extends IRouteComponentProps {
  tokenApi?: Function;
}
const LayoutGuard: FC<Iprops> = (props) => {
  const { children, route, tokenApi } = props;
  const curLocation = useLocation();
  const { dispatch, routerTabs } = useGlobal();
  const { isLogin } = useVerifyToken({ api: tokenApi });
  const layoutRender = () => {
    if (!route?.routes?.find((i) => i.path === curLocation.pathname)) {
      return children;
    }
    if (notMenusPage.includes(curLocation.pathname)) {
      return children;
    }
    return (
      <React.Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
              background: '#fafafa',
              opacity: 0.6,
            }}
          >
            <Spin
              spinning={true}
              size="default"
              tip="loadding..."
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            />
            ;
          </div>
        }
      >
        <BaseLayout>{children}</BaseLayout>;
      </React.Suspense>
    );
  };
  return (
    <BaseContext.Provider value={{ isLogin, dispatch, routerTabs }}>
      {layoutRender()}
    </BaseContext.Provider>
  );
};

export default LayoutGuard;
