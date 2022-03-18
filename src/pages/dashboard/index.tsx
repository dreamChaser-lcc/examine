import { useMemo } from 'react';
// 组件
import { Col, Row} from 'antd';
import RingLegend from './subPage/ringlegend';
import LineLegend from './subPage/lineLegend';
import GaugeLegend from './subPage/gaugeLegend';
import GeoLegend from './subPage/geoLegend';
import TaskCard from './subPage/taskCard';
// 方法
import moment from 'moment';
// 样式
import './style.less';

export default () => {
  const curDate = useMemo(() => {
    const cur = new Date().getTime();
    return moment(cur).format('YYYY-MM-DD HH:mm:ss');
  }, []);
  return (
    <div className="dashboard-wrap">
      <header className="header">
        <Row justify="space-between" align='middle'>
          <Col>
            <div>
              <h1>Welcome to my space,Lcc</h1>
              <h5>{curDate}</h5>
            </div>
          </Col>
          <Col>当前页面仅实现UI,使用Fake数据</Col>
        </Row>
      </header>
      <div className="container">
        <div className="first-row">
          <div className="left">
            <RingLegend />
          </div>
          <div className="center">
            <LineLegend />
          </div>
          <div className="right">
            <TaskCard />
          </div>
        </div>
        <div className="second-row">
          <div className="left">
            <GeoLegend />
          </div>
          <div className="right">
            <GaugeLegend />
          </div>
        </div>
      </div>
    </div>
  );
};
