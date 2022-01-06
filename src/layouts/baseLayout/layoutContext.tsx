import React, { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';
import '@/assets/styles/index.less';

interface IContextProps {}
const LayoutContext: FC<IContextProps> = (props) => {
  return (
    <Content className="base-layout-content" {...props}>
      {props.children}
    </Content>
  );
};
export default LayoutContext;
