import { FC, memo } from 'react';
// 组件
import { Card } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import IndexWork from '@/assets/images/indexWork.svg';

const QuickNav: FC = () => {
  const navConfig = [
    {
      key: 'index',
      icon: <CaretLeftOutlined />,
      label: '首页',
    },
    {
      key: 'component',
      icon: <CaretLeftOutlined />,
      label: '组件',
    },
    {
      key: 'dashboard',
      icon: <CaretLeftOutlined />,
      label: '仪表盘',
    },
    {
      key: 'legend',
      icon: <CaretLeftOutlined />,
      label: '图表',
    },
  ];

  return (
    <>
      <Card title="快捷导航">
        {navConfig.map((item) => {
          return (
            <Card.Grid
              key={item.key}
              style={{ width: '1/3', textAlign: 'center' }}
            >
              <div>
                <i>{item.icon}</i>
              </div>
              <div>{item.label}</div>
            </Card.Grid>
          );
        })}
      </Card>
      <Card style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <img src={IndexWork} />
      </Card>
    </>
  );
};
export default memo(QuickNav);
