import React, { FC, useMemo, useState } from 'react';
import { Badge, Card, Layout, Menu, Popover, Space } from 'antd'; // 布局容器 导航菜单
import { Link, useAliveController, useLocation } from 'umi'; // umi自带的链接组件
import _ from 'lodash';
import { BellOutlined } from '@ant-design/icons';
import BaseContext from '@/layouts/globalContext';
import Provider from '@/.umi/plugin-model/Provider';
import { findCurrentMenuKey, handleRouterInfo } from '@/layouts/utils';
import { menus } from '@/../config.router';
import { useGlobal } from '@/layouts/hook';
import MesList from '../mesList';
import ProHeader from '../proheader';
const { SubMenu } = Menu; // 子菜单
const { Header, Content, Sider } = Layout; // 顶部布局， 内容部分， 侧边栏

interface IBaseLayoutProps {}
const BaseLayout: FC<IBaseLayoutProps> = (props: any) => {
  const datasource = [
    { content: '第一条', time: '2020-02-04' },
    { content: '第二条', time: '2020-02-04' },
  ];
  const [collapsed, setCollapsed] = useState<boolean>();
  const changeCollapsed = ()=>{
    setCollapsed(!collapsed);
  }
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
      <Sider
        collapsed={collapsed}
        width={180}
        style={{ height: 'calc(100vh-48px)' }}
      >
        <Menu
          mode="inline"
          theme="dark"
          style={{
            height: '100%',
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
  const { dispatch, routerTabs } = useGlobal();
  return (
    <BaseContext.Provider value={{ dispatch, routerTabs }}>
      <Layout key="layout">
        <Layout>
          {sideBarRender()}
          <Layout>
            {/* <Header
            className="height-48 head"
            style={{ backgroundColor: '#DEE1E6' }}
          > */}
            <ProHeader onCollapsed={changeCollapsed}/>
            {/* <div style={{ position: 'absolute', right: '10vw' }}>
              <Popover
                placement="bottom"
                content={content}
                title="消息提醒"
                trigger="hover"
              >
                <Badge count={2} offset={[2, 0]} size={'small'}>
                  <BellOutlined style={{ fontSize: '20px' }} />
                </Badge>
              </Popover>
            </div> */}
            {/* </Header> */}
            <Content>
              <div
                id="milk"
                style={{
                  height: 'calc(100vh - 40px)',
                  overflow: 'auto',
                  boxSizing: 'border-box',
                  backgroundColor: '#fff',
                }}
              >
                {props.children}
                {/* <Card id="milk">{props.children}</Card> */}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BaseContext.Provider>
  );
};
export default BaseLayout;
