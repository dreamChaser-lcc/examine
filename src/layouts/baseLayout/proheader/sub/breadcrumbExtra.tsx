/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-03-24 22:14:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-27 22:42:01
 * @Description: 布局头部右边按钮
 */
import { FC, memo } from 'react';
// 方法
import { history } from 'umi';
import { clearRemenber } from '@/utils/login.utils';
// 组件
import MyIcon from '@/component/myIcon';
import SearchRoute from '@/component/searchRoute';
import {
  PieChartOutlined,
  GithubOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space, Badge } from 'antd';

const BreadcrumbExtra: FC = () => {
  const memuConfig = [
    {
      key: 'docs',
      children: '组件库文档',
      icon: <PieChartOutlined />,
      onClick: () => {
        window.open('http://licc.cloud/stars-lib-docs/');
      },
    },
    {
      key: 'github',
      children: 'Github',
      icon: <GithubOutlined />,
      onClick: () => {
        window.open('https://github.com/dreamChaser-lcc');
      },
    },
    {
      key: 'signOut',
      children: '退出登录',
      icon: <MyIcon type="icon-tuichu" size={18} />,
      onClick: () => {
        clearRemenber();
        history.push('/login');
      },
    },
  ];
  const menu = (
    <Menu>
      {memuConfig.map((item) => {
        return <Menu.Item {...item} />;
      })}
    </Menu>
  );

  return (
    <div>
      <Space align="center" size="middle" style={{ margin: '0 24px' }}>
        <SearchRoute />
        {/* <Badge dot>
          <AlertOutlined style={{ fontSize: 18 }} />
        </Badge> */}
        <Dropdown overlay={menu}>
          <Avatar
            icon={<GithubOutlined style={{ fontSize: 16 }} />}
            style={{ background: '#555' }}
            size={32}
          />
        </Dropdown>
      </Space>
    </div>
  );
};
export default memo(BreadcrumbExtra);
