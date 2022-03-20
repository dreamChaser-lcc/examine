import { CSSProperties } from 'react';
// 组件
import { PageHeader, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export default () => {
  const wrapStyle: CSSProperties = {
    backgroundColor: '#FFFFFF',
  };
  const titleStyle = {
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: 10,
    lineHeight: 1.5715,
  };
  return (
    <div style={wrapStyle}>
      <PageHeader
        className="site-page-header"
        backIcon={<LeftOutlined />}
        avatar={{ src: 'https://joeschmoe.io/api/v1/random', size: 50 }}
        title={
          <>
            <div>早安,开始您一天的工作吧！</div>
            <div style={titleStyle}>
              今日晴,23°C-28°C
              <div>
                未来，你只需要比一个人更好，那就是现在的自己，只要在路上就没有到不了的地方!
              </div>
            </div>
          </>
        }
        extra={
          <Space
            size={50}
            style={{ fontSize: 8, marginTop: 10, textAlign: 'right' }}
          >
            <div>
              <span>待办</span>
              <div style={{ fontSize: 30 }}>3/5</div>
            </div>
            <div>
              <span>消息</span>
              <div style={{ fontSize: 30 }}>3</div>
            </div>
            <div>
              <span>通知</span>
              <div style={{ fontSize: 30 }}>10</div>
            </div>
          </Space>
        }
      />
    </div>
  );
};
