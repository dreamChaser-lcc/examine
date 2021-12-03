import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';

export default () => {
  const options = {
    grid: [{ bottom: '55%' }, { top: '55%' }],
    xAxis: [
      {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        gridIndex: 0,
      },  
      {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        gridIndex: 1,
      },
    ],
    legend: [
      { id: 1, data: ['2015'] },
      { id: 2, data: ['2016'], top: '50%' },
    ],
    yAxis: [
      {
        type: 'value',
        gridIndex: 0,
      },
      {
        gridIndex: 1,
      },
    ],
    dataset: {
      dimensions: ['product', '2015', '2016', '2017', 'name', 'value'],
      source: [
        {
          product: 'Matcha Latte',
          '2015': 43.3,
          '2016': 85.8,
          '2017': 93.7,
          name: 'Direct1',
          value: 20,
        },
        {
          product: 'Milk Tea',
          '2015': 83.1,
          '2016': 73.4,
          '2017': 55.1,
          name: 'Direct',
          value: 80,
        },
        { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
        { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 },
      ],
      // [
      //   { name: '分类1', value: 50 },
      //   { name: '分类2', value: 80 },
      // ],
    },
    series: [
      {
        type: 'pie',
        center: ['70%', '50%'],
        radius: 35,
        // data: [
        //   {
        //     name: '分类1',
        //     value: 50,
        //   },
        //   {
        //     name: '分类2',
        //     value: 80,
        //   },
        // ],
        encode: {
          itemName: 'name',
          value: 'value',
          itemId: 'name',
          tooltip: ['name', 'value'],
        },
        tooltip: {
          trigger: 'item',
          // alwaysShowContent:true,
          triggerOn: 'click',
          enterable: true,
          // formatter: (
          //   params: any,
          //   ticket: string,
          //   callback: (ticket: string, html: string) => {},
          // ) => {
          //   setTimeout(() => {
          //     const root = document.getElementById('tool-tip');
          //     if (root) {
          //       ReactDOM.render(
          //         <Button>
          //           {params.data.name} : {params.data.value}{' '}
          //         </Button>,
          //         root,
          //       );
          //     }
          //   }, 0);
          //   return '<div id="tool-tip"></div>';
          // },
        },
      },
      {
        // data: [920, 832, 501, 634, 1090, 1030, 1210],
        // encode: { x: 0, y: 2 },
        type: 'line',
        smooth: true,
        // seriesLayoutBy: 'row',
      },
      {
        // data: [920, 832, 501, 634, 1090, 1030, 1210],
        encode: { x: 'product', y: 3 },
        type: 'line',
        smooth: true,
        xAxisIndex: 1,
        name: '2016',
        yAxisIndex: 1,
        // seriesLayoutBy: 'row',
      },
    ],
    tooltip: {
      trigger: 'axis',
      triggerOn: 'mousemove|click',
      enterable: true,
      axisPointer: { type: 'cross' },
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
  };
  // const options = {
  //   legend: {},
  //   tooltip: {},
  //   dataset: {
  //     source: [
  //       ['product', '2012', '2013', '2014', '2015'],
  //       ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
  //       ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
  //       ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
  //     ]
  //   },
  //   xAxis: [
  //     { type: 'category', gridIndex: 0 },
  //     { type: 'category', gridIndex: 1 }
  //   ],
  //   yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  //   grid: [{ bottom: '55%' }, { top: '55%' }],
  //   series: [
  //     // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
  //     { type: 'bar', seriesLayoutBy: 'row' },
  //     { type: 'bar', seriesLayoutBy: 'row' },
  //     { type: 'bar', seriesLayoutBy: 'row' },
  //     // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
  //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
  //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
  //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
  //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
  //   ]
  // };
  return (
    <div style={{ width: '800px', height: '600', overflow: 'auto' }}>
      <ReactECharts option={options} style={{ width: 750, height: '600px' }} />
    </div>
  );
};
