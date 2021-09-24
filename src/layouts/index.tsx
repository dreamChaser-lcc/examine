import React, { useMemo } from 'react';
import { Badge, Card, Layout, Menu, Popover, Space } from 'antd'; // 布局容器 导航菜单
import { Link, useAliveController } from 'umi'; // umi自带的链接组件
import _ from 'lodash';
import { menus } from '../../config.router';
import { BellOutlined } from '@ant-design/icons';
import MesList from './subpage/mesList';
import { findCurrentMenuKey, handleRouterInfo } from './utils';
import ProHeader from './subpage/proheader';
import BaseContext from '@/layouts/globalContext';
import Provider from '@/.umi/plugin-model/Provider';
import { useGlobal } from './hook';
const { SubMenu } = Menu; // 子菜单
const { Header, Content, Sider } = Layout; // 顶部布局， 内容部分， 侧边栏

export default function Layout1(props: any) {
  const datasource = [
    { content: '第一条', time: '2020-02-04' },
    { content: '第二条', time: '2020-02-04' },
  ];
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
  function getMenuItem(menuArr: any) {
    // 获取菜单项
    // 迭代menuArr
    return _.map(menuArr, (route) => {
      const iconName:any =route?.icon  ;
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
        <Menu.Item
          key={route.key}
          title={route.title}
        >
          <Link to={route.path}>{route.title}</Link>
        </Menu.Item>
      );
    });
  }
  const sideBarRender = () => {
    const key: string = defaultSelectedKey?.key ?? '';
    const parentKeys: string[] = defaultSelectedKey?.parentKeys ?? [];
    return (
      <Sider
        collapsed={false}
        width={180}
        style={{ height: 'calc(100vh-48px)' }}
      >
        <Menu
          mode="inline"
          theme="light"
          style={{
            height: '100%',
            borderRight: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
          defaultOpenKeys={parentKeys}
          defaultSelectedKeys={[key]}
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
            <ProHeader />
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
}
