import React, { FC } from 'react';
import { List, Space } from 'antd';
import { Link } from 'umi';

interface mesProps {
  datasource: any[];
}
const MesList: FC<mesProps> = (props) => {
  const { datasource } = props;
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={datasource}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item?.content}</a>}
              description={item.time}
            />
          </List.Item>
        )}
      />
      <div
        style={{
          borderTop: '1px solid #f3f3f3',
          width: '350px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          lineHeight: '60px',
        }}
      >
        <Space>
          {/* <a href="http://localhost:8000/message">查看更多</a> */}
          <Link to="/message?key=all">查看更多</Link>
          <Link to="/message?key=setting">设置</Link>
        </Space>
      </div>
    </>
  );
};
export default MesList;
