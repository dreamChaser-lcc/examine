import { FC, useEffect, useMemo, useState } from 'react';
import EChartsReact from 'echarts-for-react';

interface ILineLegendProps {
  width?: number | string;
  height?: number | null | undefined | 'auto';
}
const LineLegend: FC<ILineLegendProps> = (props) => {
  const { height, width } = props;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer:{
        type: 'cross'
      }
    },
    // toolbox: {
    //   feature: {
    //     dataZoom: {
    //       yAxisIndex: 'none',
    //     },
    //     restore: {},
    //     saveAsImage: {},
    //   },
    // },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        nameRotate: 50,
        axisTick: { show: false },
        axisLine: { show: false },
      },
      {
        type: 'category',
        position: 'top',
        data: [20, 32, 91, 34, 29, 330, 132],
        nameRotate: 50,
        axisTick: { show: false },
        axisLine: { show: false },
      },
    ],
    yAxis: {
      show: false,
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        symbol: 'none',
        itemStyle: {
          color: '#62DDAC',
        },
        areaStyle: {
          shadowColor: '#62DDAC',
          shadowOffsetY: 20,
          opacity: 0.1,
        },
        data: [20, 32, 91, 34, 29, 330, 132],
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
LineLegend.defaultProps = {
  width: '100%',
  height: 300,
};
export default LineLegend;
