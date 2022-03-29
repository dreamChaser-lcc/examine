import { FC, memo } from 'react';
// 方法
import { history } from 'umi';
// 组件
import MyIcon from '@/component/myIcon';
import { Avatar, Dropdown, Menu, Space } from 'antd';
import { clearRemenber } from '@/utils/loginpage/utils';

const BreadcrumbExtra: FC = () => {
  const menu = (
    <Menu>
      <Menu.Item
        icon={<MyIcon type="icon-tuichu" size={18} />}
        onClick={() => {
          clearRemenber();
          history.push('/login');
        }}
      >
        退出登录
      </Menu.Item>
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
