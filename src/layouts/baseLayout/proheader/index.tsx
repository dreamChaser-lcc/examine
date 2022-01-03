import { ReactNode, Fragment, FC, useContext, useEffect } from 'react';
// 组件
import { Tabs } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
// 方法
import { findCurrentMenuKey } from '@/layouts/utils';
// 常量
import BaseContext from '@/globalContext';
import { history, useAliveController } from 'umi';
import { menus } from '@/../config.router';
// 样式
import './style.less';

interface IProHeaderProps {
  /**侧边栏收缩事件 */
  onCollapsed: () => void;
}
const ProHeader: FC<IProHeaderProps> = (props) => {
  const { onCollapsed } = props;
  const { dispatch, routerTabs } = useContext(BaseContext);
  const { getCachingNodes, dropScope } = useAliveController();
  // console.log('缓存页面节点信息', getCachingNodes());
  // 当前url pathname
  const currentPathname = history.location.pathname;
  useEffect(() => {
    // 当前路由信息
    const curRouter = findCurrentMenuKey(menus, currentPathname);
    if (curRouter) {
      const isExist = routerTabs?.findIndex(
        (item) => item?.name === curRouter?.title,
      );
      if (isExist === -1) {
        dispatch('addRouterTabs', {
          name: curRouter?.title,
          pathName: curRouter?.path,
          query: history.location.query,
        });
      }
    }
    // tabs中没有，从缓存中清除
    const cahingNodes = getCachingNodes();
    cahingNodes.forEach((value) => {
      const findIndex = routerTabs.findIndex(
        (item) => item?.pathName === value?.pathName,
      );
      if (findIndex === -1) {
        setTimeout(() => {
          dropScope(value?.pathName);
        });
      }
    });
  }, [currentPathname]);
  // 删除tabs 并 删除缓存页面
  const handleTabsEdit = (key: any, action: 'add' | 'remove') => {
    switch (action) {
      case 'add':
        break;
      case 'remove':
        dispatch('deleteRouterTabs', { pathName: key });
        setTimeout(() => {
          dropScope(key);
        });
        break;
    }
  };
  // 点击切换
  const handleTabsClick = (pathname: string) => {
    const findItem = routerTabs.find((v) => v.pathname === pathname);
    history.push({ pathname, query: findItem?.query });
  };
  // console.log('路由标签页Tab', routerTabs);
  const outlineBtn = (): ReactNode => {
    return (
      <div style={{ display: 'inline-block', width: 30, height: 'inherit' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'inherit',
          }}
        >
          <MenuFoldOutlined
            onClick={() => {
              onCollapsed();
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <header className="layout-header">
        <div className="nav-board">
          <Tabs
            type="editable-card"
            hideAdd={true}
            activeKey={currentPathname}
            onEdit={handleTabsEdit}
            onTabClick={handleTabsClick}
            tabBarExtraContent={{ left: outlineBtn() }}
          >
            {routerTabs?.map((item) => {
              return (
                <Tabs.TabPane
                  tab={item.name}
                  key={item.pathName}
                  tabKey={item.pathName}
                  closable={item.pathName !== '/'}
                />
              );
            })}
          </Tabs>
        </div>
      </header>
    </Fragment>
  );
};
export default ProHeader;
