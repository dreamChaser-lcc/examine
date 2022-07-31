/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-03-24 22:14:21
 * @LastEditors: dreamChaser-lcc
 * @LastEditTime: 2022-07-31 23:22:22
 * @Description: 布局头部右边按钮
 */
import { FC, memo } from 'react';
// 方法
import { history } from 'umi';
import { clearRemenber } from '@/utils/login.utils';
// 组件
import MyIcon from '@/component/myIcon';
import { PieChartOutlined, GithubOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, Space } from 'antd';

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
      <Dropdown overlay={menu}>
        <Space align="center" style={{ margin: '0 10px' }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" size={25} />
          Admin lcc
        </Space>
      </Dropdown>
    </div>
  );
};
export default memo(BreadcrumbExtra);
