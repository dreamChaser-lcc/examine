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
          roundCap: false,
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
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
        <div
          style={{
            textAlign: 'center',
            lineHeight: '50px',
            fontWeight: 'bold',
            verticalAlign: 'middle',
          }}
        >
          Metric2F
        </div>
      </header>
      <EChartsReact
        option={option}
        lazyUpdate
        style={{ width: 'auto', height: 200, marginTop: '-1.5rem' }}
        opts={{ renderer: 'svg', height: 200 }}
      />
      <footer style={{ textAlign: 'center', height: 50 }}>
        <div
          style={{
            marginTop: '-1.5rem',
            fontSize: 8,
            paddingBottom: '10px',
            color: '#9F9FA7',
          }}
        >
          Next income Last 12 Months
        </div>
        <button
          style={{
            backgroundColor: '#F1F1F5',
            color: '#9F9FA7',
            padding: 8,
            borderRadius: 5,
            border: 'none',
          }}
        >
          learn more
        </button>
      </footer>
    </>
  );
};
export default GaugeLegend;
