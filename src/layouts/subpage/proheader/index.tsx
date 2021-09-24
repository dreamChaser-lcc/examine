import React, { Fragment, FC, useContext, useEffect } from 'react';
// 组件
import { Tabs } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
// 方法
import { findCurrentMenuKey } from '@/layouts/utils';
// 常量
import BaseContext from '@/layouts/globalContext';
import { history, useAliveController } from 'umi';
import { menus } from '../../../../config.router';
// 样式
import './style.less';
import { ReactNode } from '@umijs/renderer-react/node_modules/@types/react';

interface IProHeaderProps {}
const ProHeader: FC<IProHeaderProps> = () => {
  const { dispatch, routerTabs } = useContext(BaseContext);
  const { getCachingNodes, dropScope } = useAliveController();
  console.log('activeKey', getCachingNodes());
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
    const cahingNodes = getCachingNodes();
    cahingNodes.forEach(value=>{
      const findIndex = routerTabs.findIndex(item=>item?.pathName===value?.pathName);
      if(findIndex===-1){
        setTimeout(()=>{
          dropScope(value?.pathName)
        })
      }
    })
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
  console.log(routerTabs);
  const outlineBtn = ():ReactNode => {
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
          <MenuFoldOutlined />
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <header className="layout-header">
        {/* <div style={{ position: 'absolute', left: 30, bottom: 0,width:'calc(100% - 30px)' }}> */}
        <Tabs
          type="editable-card"
          hideAdd={true}
          activeKey={currentPathname}
          onEdit={handleTabsEdit}
          onTabClick={handleTabsClick}
          tabBarExtraContent={{left:outlineBtn()}}
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
        {/* </div> */}
      </header>
    </Fragment>
  );
};
export default ProHeader;
