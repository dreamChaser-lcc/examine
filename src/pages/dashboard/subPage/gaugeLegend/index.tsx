import { FC } from 'react';
// 组件
import EChartsReact from 'echarts-for-react';
import { Button } from 'antd';

interface IGaugeLendProps {}
const GaugeLegend: FC<IGaugeLendProps> = (props) => {
  const {} = props;
  const option = {
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18,
        },
        axisLine: {
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 10,
          lineStyle: {
            width: 2,
            color: '#999',
          },
        },
        axisLabel: {
          distance: 20,
          color: '#999',
          fontSize: 12,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 14,
          offsetCenter: [0, '70%'],
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };
  return (
    <>
      <header>
        <h4 style={{ textAlign: 'center', height: 50 }}>Metric2F</h4>
      </header>
      <EChartsReact
        option={option}
        lazyUpdate
        style={{ width: 'auto', height: 200 }}
        opts={{ renderer: 'svg', height: 200 }}
      />
      <footer style={{ textAlign: 'center', height: 50 }}>
        <Button type="primary"  ghost>
          Danger
        </Button>
      </footer>
    </>
  );
};
export default GaugeLegend;
