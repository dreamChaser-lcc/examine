import { ReactNode, Fragment, FC, useContext, useEffect } from 'react';
// 组件
import { Breadcrumb, Tabs } from 'antd';
import { MenuFoldOutlined, HomeOutlined } from '@ant-design/icons';
import DropMenus from './sub/dropMenus';
// 方法
import { findCurrentMenuKey } from '@/layouts/utils';
// 常量
import BaseContext from '@/globalContext';
import { history, Link, useAliveController } from 'umi';
import { getBreadCrumbMenus, menus } from '@/../config.router';

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
        (item) => item?.pathName === value?.name,
      );
      if (findIndex === -1) {
        setTimeout(() => {
          dropScope(value.name as string);
        });
      }
    });
  }, [currentPathname, routerTabs]);
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
    }
  };
  // 点击切换
  const handleTabsClick = (pathname: string) => {
    const findItem = routerTabs.find((v) => v.pathname === pathname);
    history.push({ pathname, query: findItem?.query });
  };
  const outlineBtn = (): ReactNode => {
    return (
      <div
        style={{
          display: 'flex',
          width: 30,
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
    );
  };
  /**面包屑 */
  const renderBeadcrumb = () => {
    const allMenus = getBreadCrumbMenus();
    // filter 会过滤undefined或''
    const snippet = currentPathname.split('/').filter((i) => i);
    const extraBreadcrumbItems = snippet.map((item, index) => {
      let url = snippet.slice(0, index + 1).join('/');
      url = index === 0 ? url : `/${url}`;
      return (
        <Breadcrumb.Item key={item}>
          <span>{allMenus[item]} </span>
        </Breadcrumb.Item>
      );
    });
    const basicItem = [
      <Breadcrumb.Item key="home">
        <Link to="/">
          <HomeOutlined />
          Home
        </Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return <Breadcrumb>{basicItem}</Breadcrumb>;
  };
  return (
    <Fragment>
      <header className="base-layout-header">
        <div className="nav-board">
          <div className="nav-breadcrumb">{renderBeadcrumb()}</div>
          <Tabs
            type="editable-card"
            hideAdd={true}
            activeKey={currentPathname}
            onEdit={handleTabsEdit}
            animated
            className="tabs-layout"
            onTabClick={handleTabsClick}
            tabBarExtraContent={{ left: outlineBtn() }}
          >
            {routerTabs?.map((item) => {
              return (
                <Tabs.TabPane
                  tab={<DropMenus tabInfo={item}>{item.name}</DropMenus>}
                  key={item.pathName}
                  tabKey={item.pathName}
                  style={{ background: 'red' }}
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
