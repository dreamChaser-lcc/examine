import React, { FC } from 'react';
import { Content } from 'antd/lib/layout/layout';

interface IContextProps {}
const LayoutContext: FC<IContextProps> = (props) => {
  return (
    <Content>
      <div
        id="milk"
        style={{
          padding: 20,
          height: '100%',
          overflow: 'auto',
          boxSizing: 'border-box',
          backgroundColor: '#F0F2F5',
        }}
      >
        {props.children}
      </div>
    </Content>
  );
};
export default LayoutContext;
