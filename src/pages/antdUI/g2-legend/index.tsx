import React, { useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';

export default () => {
  const [legend, setChart] = useState<any>();
  const zztLegend = () => {
    const data = [
      { year: '1951 年', sales: 38 },
      { year: '1952 年', sales: 52 },
      { year: '1956 年', sales: 61 },
      { year: '1957 年', sales: 145 },
      { year: '1958 年', sales: 48 },
      { year: '1959 年', sales: 38 },
      { year: '1960 年', sales: 38 },
      { year: '1962 年', sales: 38 },
    ];

    const chart = new Chart({
      container: 'container',
      autoFit: false,
      height: 300,
      width: 300,
    });
    setChart(chart);
    chart.data(data);
    chart.scale('sales', {
      nice: true,
    });

    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction('active-region');

    chart.interval().position('year*sales');

    chart.render();
  };
  const bztLegend = () => {
    const data = [
      { item: '事例一', count: 40, percent: 0.4 },
      { item: '事例二', count: 21, percent: 0.21 },
      { item: '事例三', count: 17, percent: 0.17 },
      { item: '事例四', count: 13, percent: 0.13 },
      { item: '事例五', count: 9, percent: 0.09 },
    ];
    const chart = new Chart({
      container: 'container1',
      autoFit: false,
      height: 300,
      width: 500,
    });
    chart.coordinate('theta', {
      radius: 0.75,
    });
    chart.data(data);
    chart.scale('percent', {
      formatter: (val) => {
        val = val * 100 + '%';
        return val;
      },
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });
    chart
      .interval()
      .position('percent')
      .color('item')
      .label('percent', {
        content: (data) => {
          return `${data.item}: ${data.percent * 100}%`;
        },
      })
      .adjust('stack');
    chart.interaction('element-active');
    chart.render();
  };
  useEffect(() => {
    zztLegend();
    bztLegend();
  }, []);
  //柱状图改变
  const handleClick = () => {
    const newData = [
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
      {
        year: `${Math.ceil(Math.random() * 1000) * 2}年`,
        sales: Math.floor(Math.random() * 100),
      },
    ];
    if (legend) {
      legend.data(newData);
      legend.render();
    }
  };
  return (
    <>
      <Row>
        <Col span={10}>
          <Card title={'柱状图'} style={{ margin: '20px' }}>
            <div
              id="container"
              style={{ textAlign: 'center', margin: 'auto 0' }}
            ></div>
            <Button type="primary" onClick={handleClick}>
              changeData
            </Button>
          </Card>
        </Col>
        <Col span={12}>
          <Card title={'饼图'} style={{ margin: '20px' }}>
            <div
              id="container1"
              style={{ textAlign: 'center', margin: 'auto 0' }}
            ></div>
            <Button type="primary">UnChangeData</Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
