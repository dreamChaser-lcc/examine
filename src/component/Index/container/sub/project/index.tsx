import { CSSProperties, FC, memo } from 'react';
// 组件
import { Card, Row, Space } from 'antd';
import { projectConfig } from './projectConfig';

interface IProjectProps {}
const Project: FC<IProjectProps> = () => {
  const gridStyle: CSSProperties = {
    width: '1/3',
  };
  const titleStyle: CSSProperties = {
    fontSize: 20,
  };
  const contentStyle: CSSProperties = {
    paddingTop: 10,
    paddingBottom: 20,
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: 12,
  };
  const fs: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.45)',
    fontSize: 12,
  };
  const handleJumpToDocs = (link: string) => {
    window.open(link);
  };
  return (
    <Card title="项目">
      {projectConfig.map((item) => {
        return (
          <Card.Grid
            onClick={() => {
              handleJumpToDocs(item.link);
            }}
            key={item.key}
            style={gridStyle}
          >
            <div style={titleStyle}>
              <Space>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Space>
            </div>
            <div style={contentStyle}>{item.content}</div>
            <Row justify="space-between" align="middle">
              <span style={fs}>{item.description}</span>
              <span>{item.date}</span>
            </Row>
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default memo(Project);
