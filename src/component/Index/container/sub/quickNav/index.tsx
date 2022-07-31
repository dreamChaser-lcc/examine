import { FC, memo } from 'react';
// 组件
import { Card } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import IndexWork from '@/assets/images/indexWork.svg';
import MyIcon from '@/component/myIcon';
import { history } from 'umi';

const QuickNav: FC = () => {
  const navConfig = [
    {
      key: 'index',
      icon: <MyIcon type="icon-shouye" />,
      link: '/',
      label: '首页',
    },
    {
      key: 'component',
      icon: <MyIcon type="icon-zujianhua" />,
      link: '/complete-demo/publishDocs',
      label: '组件',
    },
    {
      key: 'dashboard',
      icon: <MyIcon type="icon-shouyedashboard" />,
      link: '/dashboard',
      label: '仪表盘',
    },
    {
      key: 'legend',
      icon: <MyIcon type="icon-tubiao" />,
      link: '/echarts-explore/lineAndpie',
      label: '图表',
    },
  ];
  const handleJumpTo = (link: string) => {
    history.push(link);
  };
  return (
    <>
      <Card title="快捷导航">
        {navConfig.map((item) => {
          return (
            <Card.Grid
              key={item.key}
              onClick={() => {
                handleJumpTo(item.link);
              }}
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
