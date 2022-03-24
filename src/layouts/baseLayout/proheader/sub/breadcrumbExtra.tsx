import { Avatar, Space } from 'antd';
import { FC, memo } from 'react';

const BreadcrumbExtra: FC = () => {
  return (
    <div>
      <Space align="center">
        <Avatar src="https://joeschmoe.io/api/v1/random" size={25} />
        Admin lcc
      </Space>
    </div>
  );
};
export default memo(BreadcrumbExtra);
