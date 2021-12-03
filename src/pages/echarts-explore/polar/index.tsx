import { FC } from 'react';

import ReactECharts from 'echarts-for-react';

const ploarAxis: FC = () => {
  const options = {
    grid: {},
    polar: {},
    dataset: {
      dimensions: ['radiusAxis', 'angleAxis', 'barRadius', 'radius'],
      source: [
        { radiusAxis: '1a', angleAxis: '1b', barRadius: 1, barAngle: 1 },
        { radiusAxis: '2a', angleAxis: '2b', barRadius: 2, barAngle: 2 },
        { radiusAxis: '3a', angleAxis: '3b', barRadius: 3, barAngle: 3 },
        { radiusAxis: '4a', angleAxis: '4b', barRadius: 4, barAngle: 4 },
        { radiusAxis: '5a', angleAxis: '5b', barRadius: 5, barAngle: 5 },
        { radiusAxis: '6a', angleAxis: '6b', barRadius: 6, barAngle: 6 },
        { radiusAxis: '7a', angleAxis: '7b', barRadius: 2, barAngle: 2 },
        { radiusAxis: '8a', angleAxis: '8b', barRadius: 3, barAngle: 3 },
        { radiusAxis: '9a', angleAxis: '9b', barRadius: 4, barAngle: 4 },
      ],
    },
    tooltip:{
      axisPointer: {
        type: "cross"
      }
    },
    datazoom:{
      type:'inside'
    },
    angleAxis: {
      type: 'category',
    },
    radiusAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisLabel: {
        rotate: 20,
      },
    },
    series: [
      // {
      //   name: 'Punch Card',
      //   type: 'scatter',
      //   coordinateSystem: 'polar',
      //   // data: [
      //   //   [0, 0, 5],
      //   //   [0, 1, 1],
      //   // ],
      //   encode: {
      //     radius: 'radiusAxis',
      //     angle: 'angleAxis',
      //   },
      // },
      {
        name: 'Punch Card',
        type: 'bar',
        coordinateSystem: 'polar',
        // data: [
        //   [0, 0, 5],
        //   [0, 1, 1],
        // ],
        encode: {
          radius: 'barRadius',
          angle: 'barAngle',
        },
      },
    ],
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
  };
  return (
    <>
      <div style={{ width: '800px', height: '600', overflow: 'auto' }}>
        <ReactECharts
          option={options}
          style={{ width: 300, height: '300px' }}
        />
      </div>
    </>
  );
};
export default ploarAxis;
