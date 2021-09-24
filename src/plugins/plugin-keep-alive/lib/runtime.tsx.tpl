import React, { useEffect } from 'react';
import { Router, ApplyPluginsType } from 'umi';
import { renderRoutes } from '@umijs/renderer-react';
import KeepAlive, { AliveScope, NodeKey } from 'react-activation';
import { matchRoutes } from 'react-router-config';
import { Spin } from 'antd';

// @ts-ignore
NodeKey.defaultProps.onHandleNode = (node, mark) => {
  // 因异步组件 loaded 后会去掉 LoadableComponent 层，导致 nodeKey 变化，缓存定位错误
  // 故排除对 LoadableComponent 组件的标记，兼容 dynamicImport
  if (node.type && node.type.displayName === 'LoadableComponent') {
    return undefined;
  }

  return mark;
};

// 覆写 RouterComponent，仅置入 AliveScope 而不改动剩余逻辑
// https://github.com/umijs/umi/blob/v3.2.10/packages/renderer-react/src/renderClient/renderClient.tsx#L22
function AliveRouterComponent({ children, history, ...renderProps }: any) {
  const renderRoutesProps = {...children.props, ...renderProps};
  const props = { history, ...renderRoutesProps };

  useEffect(() => {
    // first time using window.g_initialProps
    // switch route fetching data, if exact route reset window.getInitialProps
    if (typeof window !== 'undefined' && (window as any).g_initialProps) {
      (window as any).g_initialProps = null;
    }
    function routeChangeHandler(location: any, action?: string) {
      const matchedRoutes = matchRoutes(props.routes, location.pathname);
      props.plugin.applyPlugins({
        key: 'onRouteChange',
        type: ApplyPluginsType.event,
        args: {
          routes: props.routes,
          matchedRoutes,
          location,
          action,
        },
      });
    }
    routeChangeHandler(history.location, 'POP');
    return history.listen(routeChangeHandler);
  }, [history]);
  const styleObj = {width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'};
  renderRoutesProps.routes[0].routes = renderRoutesProps.routes[0].routes.map(route => {
    if (route && route.component) {
      if (route.path.includes('/subpage/')) return route;
      if (typeof route.component === 'function') {
        return {
          ...route,
          component: (_ref) => {
            let PageComponent = route.component;
            return (
              <KeepAlive name={route.path}><PageComponent { ..._ref } /></KeepAlive>
            );
          }
        };
      }
      if (typeof route.component === 'object') {
        if (!route.component.render && typeof route.component.render !== 'function') return route;
        return {
          ...route,
          component: {
            ...route.component,
            render: (props, ref) => {
              const renderObj = route.component.render(props, ref);
              if (renderObj.props && !renderObj.props.isLoading) {
                let PageComponent = renderObj.type;
                return (
                  <KeepAlive name={route.path}><PageComponent { ...props } ref={ref} /></KeepAlive>
                );
              }
              return (
                <div style={styleObj}>
                  <Spin />
                </div>
              );
            }
          },
        };
      }
      return route;
    }
    return route;
  });
  return (
    <Router history={history}>
      <AliveScope>{renderRoutes(renderRoutesProps)}</AliveScope>
    </Router>
  );
}

export function rootContainer(container: React.ReactNode, clientProps: any) {
  return (
    <AliveRouterComponent {...clientProps}>{container}</AliveRouterComponent>
  );
}
