import React, { FC, useMemo, useState } from 'react';
// 组件
import ProHeader from '../proheader';
import { Badge, Card, Layout, Menu, Popover, Space } from 'antd'; // 布局容器 导航菜单
// 方法
import _ from 'lodash';
import { findCurrentMenuKey, handleRouterInfo } from '@/layouts/utils';
import MesList from '../mesList';
// hooks
import { useGlobal } from '@/globalContext/hook';
import { Link, useAliveController, useLocation } from 'umi'; // umi自带的链接组件
// 常量
import BaseContext from '@/globalContext';
import { menus } from '@/../config.router';
import logo from '@/assets/images/readingLogo1.png';
import LayoutContext from './layoutContext';

const { SubMenu } = Menu; // 子菜单
const { Header, Content, Sider } = Layout; // 顶部布局， 内容部分， 侧边栏

interface IBaseLayoutProps {}
const BaseLayout: FC<IBaseLayoutProps> = (props: any) => {
  const datasource = [
    { content: '第一条', time: '2020-02-04' },
    { content: '第二条', time: '2020-02-04' },
  ];
  const [collapsed, setCollapsed] = useState<boolean>();
  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  // 默认选中菜单
  const defaultSelectedKey = useMemo(() => {
    const pathname = window.location.pathname;
    // 给chilren加入parentKey
    const newMenus = handleRouterInfo(menus, []);
    const curRouter = findCurrentMenuKey(newMenus, pathname);
    if (curRouter) {
      return curRouter;
    }
  }, []);
  const curLocation = useLocation();
  // 默认选中菜单(替代)
  const defaultSelect = useMemo(() => {
    const keyArr = curLocation.pathname.split('/');
    const openKeys = keyArr.slice(0, keyArr.length - 1);
    const selectKeys = keyArr.slice(keyArr.length - 1);
    return {
      openKeys,
      selectKeys,
    };
  }, [curLocation]);
  function getMenuItem(menuArr: any) {
    // 获取菜单项
    // 迭代menuArr
    return _.map(menuArr, (route) => {
      const iconName: any = route?.icon;
      if (route.children) {
        // 有多级菜单时
        return (
          <SubMenu
            key={route.key}
            title={<div title={route.title}>{route.title}</div>}
          >
            {getMenuItem(route.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={route.key} title={route.title}>
          <Link to={route.path}>{route.title}</Link>
        </Menu.Item>
      );
    });
  }
  const sideBarRender = () => {
    return (
      <Sider collapsed={collapsed} width={180} style={{ height: '100%' }}>
        <div
          style={{ textAlign: 'center', padding: 10, boxSizing: 'border-box' }}
        >
          <img
            style={{ width: 150, height: 100, boxSizing: 'border-box' }}
            src={logo}
            alt="logo"
          />
        </div>
        <Menu
          mode="inline"
          theme="dark"
          style={{
            height: 'calc(100% - 120px)',
            borderRight: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
          defaultOpenKeys={defaultSelect?.openKeys ?? ['']}
          defaultSelectedKeys={defaultSelect?.selectKeys ?? ['']}
        >
          {getMenuItem(menus)}
        </Menu>
      </Sider>
    );
  };
  const content = (
    <>
      <MesList datasource={datasource} />
    </>
  );
  return (
    <Layout key="layout" id="layout">
      <Layout>
        {sideBarRender()}
        <Layout className="base-layout-right">
          <ProHeader onCollapsed={changeCollapsed} />
          <LayoutContext {...props} />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
