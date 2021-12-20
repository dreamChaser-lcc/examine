import React, { FC, forwardRef } from 'react';
import Grid, { CardGridProps } from 'antd/lib/card/Grid';
/**
 * 二次封装antd Grid
 * 并保留原有antd类型
 */
const ProGrid: FC<CardGridProps> = forwardRef<any, CardGridProps>(
  (props, ref) => {
    const { children, ...extraProps } = props;
    return (
      <div ref={ref}>
        <Grid {...extraProps}>{children}</Grid>
      </div>
    );
  },
);
export default ProGrid;
