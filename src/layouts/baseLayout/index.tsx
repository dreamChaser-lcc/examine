/*
 * @Author: lcc
 * @Date: 2022-11-19 21:17:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-31 19:42:46
 * @Description:
 */
import React, { FC, useMemo, useState } from 'react';
import { IRouteComponentProps, useLocation, Outlet, useMatch } from 'umi';
// 组件
import ProHeader from './proheader';
import { Badge, Card, Layout, Menu, Popover, Space } from 'antd'; // 布局容器 导航菜单
// 方法
import _ from 'lodash';
import { findCurrentMenuKey, handleRouterInfo } from '@/layouts/utils';
// hooks
// 常量
import { menus } from '@/../config.router';
import logo from '@/assets/images/readingLogo1.png';
import LayoutContext from './layoutContext';
import MesList from './mesList';
// 样式
import '@/assets/styles/index.less';
import Siderbar from './siderbar';

const { SubMenu } = Menu; // 子菜单
const { Header, Content, Sider } = Layout; // 顶部布局， 内容部分， 侧边栏

interface IBaseLayoutProps {
  showmenus: string | boolean | number;
}
const BaseLayout: FC<IBaseLayoutProps> = (props: any) => {
  const { children, showmenus } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return showmenus ? (
    <Layout key="layout" id="layout" className="base-layout">
      <Siderbar collapsed={collapsed} />
      <Layout className="base-layout-right">
        <ProHeader onCollapsed={changeCollapsed} />
        <LayoutContext {...props} />
      </Layout>
    </Layout>
  ) : (
    <>{children}</>
  );
};
export default BaseLayout;
