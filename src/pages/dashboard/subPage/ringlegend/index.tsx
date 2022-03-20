import { FC, useEffect, useMemo, useState } from 'react';
// 组件
import EChartsReact, { EChartsOption } from 'echarts-for-react';
import ProEcharts from '@/component/ProEcharts';

interface IRingLegendProps {
  width?: number | string;
  height?: number | null | undefined | 'auto';
}
const RingLegend: FC<IRingLegendProps> = (props) => {
  const { height, width } = props;
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontSize: '1rem',
      },
      position: ['50%', '50%'],
    },
    legend: {
      bottom: 0,
      textStyle: {
        fontSize: '12',
        width: 500,
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        width: '90%',
        height: '60%',
        top: '10%',
        left: 'center',
        radius: ['90%', '100%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: true,
        label: {
          show: true,
          formatter: (params: any) => 'custom Content',
          position: 'center',
          fontSize: 12,
        },
        // emphasis: {
        //   label: {
        //     show: false,
        //     fontSize: '10',
        //     fontWeight: 'bold',
        //   },
        // },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
      },
    ],
  };
  // useEffect(()=>{
  //   setOptions(option);
  // },[option])
  return (
    <ProEcharts
      option={option}
      lazyUpdate
      wrapStyle={{ height: 300 }}
      opts={{ renderer: 'svg', height: 300 }}
    />
  );
};
RingLegend.defaultProps = {
  width: '100%',
  height: 300,
};
export default RingLegend;
