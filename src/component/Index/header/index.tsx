import { CSSProperties, useMemo } from 'react';
// 组件
import { PageHeader, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export default () => {
  const wrapStyle: CSSProperties = {
    backgroundColor: '#FFFFFF',
    margin: '1rem',
  };
  const titleStyle = {
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: 10,
    lineHeight: 1.5715,
  };

  const completed = useMemo(() => {
    return Math.round(Math.random() * 10);
  }, []);
  const allTask = useMemo(() => {
    return completed + Math.round(Math.random() * 10);
  }, [completed]);
  const notify = useMemo(() => {
    return Math.round(Math.random() * 10);
  }, []);

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
              <div>只要在路上就没有到不了的远方!</div>
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
              <div style={{ fontSize: 30 }}>
                {completed}/{allTask}
              </div>
            </div>
            <div>
              <span>消息</span>
              <div style={{ fontSize: 30 }}>{allTask}</div>
            </div>
            <div>
              <span>通知</span>
              <div style={{ fontSize: 30 }}>{notify}</div>
            </div>
          </Space>
        }
      />
    </div>
  );
};
