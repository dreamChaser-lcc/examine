import { FC, useEffect, useState } from 'react';
// 组件
import { Col, Row } from 'antd';
import ProEcharts from '@/component/ProEcharts';
import { GET } from '@/axios';
// 方法
import Analysis from './analysis';
/**常量 */
import { EChartOptionType } from '@/component/ProEcharts/typing';
import { data, geoCoordMap } from './geoConfig';

interface IGeoLegendProps {}
const GeoLegend: FC<IGeoLegendProps> = () => {
  const [geoJson, setGeoJson] = useState<any>();

  /**获取在线中国地图GEOJSON数据 */
  const getGeoJSON = async () => {
    const res = await GET(
      'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
    );
    setGeoJson(res);
  };
  useEffect(() => {
    getGeoJSON();
  }, []);

  const convertData = function (data: any) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
      const geoCoord = geoCoordMap[data[i].name as keyof typeof geoCoordMap];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value),
        });
      }
    }
    return res;
  };

  const option: EChartOptionType = {
    title: {
      text: '全国主要城市空气质量',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    geo: [
      {
        map: 'china',
        roam: true,
        itemStyle: {
          borderWidth: 0.5, //区域边框宽度
          borderColor: '#95afc0', //区域边框颜色
          areaColor: '#E2E2EA', //区域颜色
        },
        emphasis: {
          itemStyle: {
            borderWidth: 0.5, //区域边框宽度
            borderColor: '#029FD4', //区域边框颜色
            areaColor: '#FFC542', //区域颜色
          },
        },
      },
    ],
    series: [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function (val: any) {
          return val[2] / 10;
        },
        encode: {
          value: 2,
        },
        label: {
          formatter: '{b}',
          position: 'right',
          show: false,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
      },
    ],
  };

  return (
    <Row>
      <Col flex={'0 0 250px'}>
        <div style={{ height: '100%', borderRight: '1px solid #EAEAEF' }}>
          <Analysis />
        </div>
      </Col>
      <Col flex={1}>
        <ProEcharts
          option={option}
          onBeforeInit={(echarts) => {
            /**注册地图背景 */
            echarts.registerMap('china', { geoJSON: geoJson });
          }}
        />
      </Col>
    </Row>
  );
};
export default GeoLegend;
