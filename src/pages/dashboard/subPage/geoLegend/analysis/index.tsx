import { FC } from 'react';
// 组件
import { Card, List, Space } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

interface IAnalysisProps {}
const Analysis: FC<IAnalysisProps> = () => {
  const descripteConfig = [
    {
      label: 'asd',
      value: '12',
      style: {
        background: '#46D79D',
      },
    },
    {
      label: 'asd',
      value: '12',
      style: {
        background: '#FF974A',
      },
    },
    {
      label: 'asd',
      value: '12',
      style: {
        background: '#BE42FF',
      },
    },
    {
      label: 'asd',
      value: '12',
      style: {
        background: '#0766FF',
      },
    },
  ];

  return (
    <>
      <Card size="small" style={{ height: '100%' }} title="Ranking List">
        <main id="origin">
          <Space
            align="center"
            style={{ fontSize: 18, fontWeight: 'bold', padding: '10px 8px' }}
          >
            <TeamOutlined /> 11.2k
          </Space>
        </main>
        <List
          className="description"
          dataSource={descripteConfig}
          split={false}
          size="small"
          renderItem={(item) => (
            <List.Item
              extra={<>{item?.value}</>}
              style={{ paddingLeft: 3, paddingRight: 3 }}
            >
              {
                <Space>
                  <i
                    style={{
                      width: 5,
                      height: 5,
                      display: 'inline-block',
                      borderRadius: 5,
                      ...item.style,
                    }}
                  ></i>
                  <span>{item.label}</span>
                </Space>
              }
            </List.Item>
          )}
        ></List>
      </Card>
    </>
  );
};
export default Analysis;
