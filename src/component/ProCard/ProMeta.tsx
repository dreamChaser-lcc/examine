import React, { FC, forwardRef } from 'react';
import Meta, { CardMetaProps } from 'antd/lib/card/Meta';
/**
 * 二次封装antd Meta
 * 并保留原有antd类型
 */
const ProMeta: FC<CardMetaProps> = forwardRef<any, CardMetaProps>(
  (props, ref) => {
    const { children, ...extraProps } = props;
    return (
      <div ref={ref}>
        <Meta {...extraProps}>{children}</Meta>
      </div>
    );
  },
);
export default ProMeta;
