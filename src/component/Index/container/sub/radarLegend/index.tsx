import { memo } from 'react';
// 组件
import ProEcharts from '@/component/ProEcharts';
import { Card } from 'antd';
import { EChartOptionType } from '@/component/ProEcharts/typing';

export default memo(() => {
  const option: EChartOptionType = {
    tooltip: {
      show: true,
    },
    radar: {
      indicator: [
        { name: '2017', max: 6500 },
        { name: '2018', max: 16000 },
        { name: '2019', max: 30000 },
        { name: '2020', max: 38000 },
        { name: '2021', max: 52000 },
        { name: '2022', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        symbolOffset: [0, '50%'],
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated',
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual',
          },
        ],
      },
    ],
  };
  return (
    <Card title="雷达图">
      <ProEcharts option={option} opts={{ renderer: 'svg' }} />
    </Card>
  );
});
