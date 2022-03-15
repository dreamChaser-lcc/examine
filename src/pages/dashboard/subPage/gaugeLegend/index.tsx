import EChartsReact from 'echarts-for-react';
import { FC } from 'react';

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
    <EChartsReact
      option={option}
      lazyUpdate
      style={{ width: 'auto', height: 300 }}
      opts={{ renderer: 'svg', height: 300 }}
    />
  );
};
export default GaugeLegend;
