import { FC, useEffect, useMemo, useState } from 'react';
// 组件
import EChartsReact from 'echarts-for-react';
import { Col, Row, Select } from 'antd';

interface ILineLegendProps {
  width?: number | string;
  height?: number | null | undefined | 'auto';
}
const LineLegend: FC<ILineLegendProps> = (props) => {
  const { height, width } = props;

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
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
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { rotate: 20 },
        boundaryGap: false,
      },
      {
        type: 'category',
        position: 'top',
        data: [20, 32, 91, 34, 29, 330, 132],
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <EChartsReact
          option={option}
          lazyUpdate
          style={{ width: 'auto', height: 250 }}
          opts={{ renderer: 'svg' }}
        />
      </div>
      <div style={{ flexBasis: 50, padding: '0 15px',marginTop:-15 }}>
        <Row justify="space-between">
          <Col>
            <div style={{ fontWeight: 'bold' }}>New Customer Email Sent</div>
            14.step funnel
          </Col>
          <Col>
            Show Data：
            <Select
              defaultValue="thisWeek"
              style={{ width: 120 }}
              onChange={() => {}}
            >
              <Select.Option value="thisWeek">this week</Select.Option>
              <Select.Option value="lastWeek">last Week</Select.Option>
            </Select>
          </Col>
        </Row>
      </div>
    </div>
  );
};
LineLegend.defaultProps = {
  width: '100%',
  height: 300,
};
export default LineLegend;
