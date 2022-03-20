import { FC, useState } from 'react';
// 组件
import { Col, Row, Select } from 'antd';
import ProEcharts from '@/component/ProEcharts';
import { EChartOptionType } from '@/component/ProEcharts/typing';

interface ILineLegendProps {
  width?: number | string;
  height?: number | null | undefined | 'auto';
}
const LineLegend: FC<ILineLegendProps> = (props) => {
  const { height, width } = props;
  const thisWeekData = [20, 32, 91, 34, 29, 330, 132];
  const lastWeekData = [20, 32, 91, 34, 29, 330, 132].reverse();
  const [showData, setShowData] = useState<any>(thisWeekData);
  const option: EChartOptionType = {
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
        data: showData,
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div style={{ flex: '1 1 auto' }}>
        <ProEcharts option={option} height={250} opts={{ renderer: 'svg' }} />
      </div>
      <div style={{ flexBasis: 50, padding: '0 15px', marginTop: -15 }}>
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
              onChange={(val) => {
                if (val === 'thisWeek') {
                  setShowData(thisWeekData);
                } else {
                  setShowData(lastWeekData);
                }
              }}
            >
              <Select.Option key="cur" value="thisWeek">
                this week
              </Select.Option>
              <Select.Option key="last" value="lastWeek">
                last Week
              </Select.Option>
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
