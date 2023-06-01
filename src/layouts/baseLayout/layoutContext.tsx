/*
 * @Author: lcc
 * @Date: 2022-11-19 21:17:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-06-01 09:20:54
 * @Description:
 */
import { FC } from 'react';
import { Outlet } from '@umijs/max';
// 组件
import { Content } from 'antd/lib/layout/layout';
import { BackTop, Button } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

import '@/assets/styles/index.less';

interface IContextProps {}
const LayoutContext: FC<IContextProps> = (props) => {
  return (
    <Content className="base-layout-content" {...props}>
      <Outlet />

      <BackTop
        visibilityHeight={50}
        target={() => {
          return (
            (document.querySelector('.base-layout-content') as HTMLElement) ??
            document.body
          );
        }}
      >
        <Button
          style={{ background: '#FFF' }}
          size="large"
          icon={<RocketOutlined />}
          shape="circle"
        />
      </BackTop>
    </Content>
  );
};
export default LayoutContext;
