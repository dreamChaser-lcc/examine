import React, { FC, forwardRef } from 'react';
import { Card } from 'antd';
import { ProCardProps } from './typing';
/**
 * 二次封装antd Card
 * 并保留原有antd类型
 */
const ProCard: FC<ProCardProps> = forwardRef<any, ProCardProps>(
  (props, ref) => {
    const { children, ...extraProps } = props;
    return (
      <div ref={ref}>
        <Card title {...extraProps}>
          {children}
        </Card>
      </div>
    );
  },
);
export default ProCard;
