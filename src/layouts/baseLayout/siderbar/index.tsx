/*
 * @Author: lcc
 * @Date: 2022-11-19 21:17:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-27 16:22:49
 * @Description:
 */
import { FC, Key, useMemo, useState } from 'react';
// 组件
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'umi';
import MyIcon from '@/component/myIcon';
// 方法
import _ from 'lodash';
// 常量
// import logo from '@/assets/images/readingLogo1.png';
import logo from '@/../public/logo.png';
import { menus } from '@/../config.router';
import classNames from 'classnames';

interface SiderbarProps {
  collapsed: boolean;
}
const Siderbar: FC<SiderbarProps> = (props) => {
  const { collapsed } = props;
  const [openkeys, setOpenkeys] = useState<string[]>([]);

  const curLocation = useLocation();
  const defaultSelect = useMemo(() => {
    const keyArr = curLocation.pathname.split('/');
    const openKeys = keyArr.slice(0, keyArr.length - 1);
    const selectKeys = keyArr.slice(keyArr.length - 1);
    // console.log(keyArr,openKeys)
    setOpenkeys(openKeys);
    return {
      openKeys,
      selectKeys,
    };
  }, [curLocation]);
  const onOpenChange = (openKeys: any[]) => {
    setOpenkeys(openKeys);
  };
  // 子菜单
  const getMenuItem = (menuArr: any) => {
    // 迭代menuArr
    return _.map(menuArr, (route) => {
      const iconName: any = route?.icon;
      if (route.children) {
        // 有多级菜单时
        return (
          <Menu.SubMenu
            icon={
              route?.iconCode ? (
                <MyIcon size={18} type={route?.iconCode} />
              ) : null
            }
            key={route.key}
            title={<div title={route.title}>{route.title}</div>}
          >
            {getMenuItem(route.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item
          icon={
            route?.iconCode ? <MyIcon size={18} type={route?.iconCode} /> : null
          }
          key={route.key}
          title={route.title}
        >
          <Link to={route.path}>{route.title}</Link>
        </Menu.Item>
      );
    });
  };
  const logoClass = classNames('sider-logo', {
    hide: collapsed,
  });
  return (
    <Layout.Sider
      collapsed={collapsed}
      width={200}
      className="base-layout-sider"
    >
      <div className={logoClass}>
        <img className="image" src={logo} alt="logo" />
        <span className="label">MyAdmin</span>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        className="sider-menus"
        defaultOpenKeys={defaultSelect?.openKeys}
        openKeys={openkeys}
        onOpenChange={onOpenChange}
        selectedKeys={defaultSelect?.selectKeys ?? ['']}
      >
        {getMenuItem(menus)}
      </Menu>
    </Layout.Sider>
  );
};
export default Siderbar;
