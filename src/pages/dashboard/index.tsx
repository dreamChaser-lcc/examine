import { useMemo } from 'react';
// 组件
import RingLegend from './subPage/ringlegend';
import LineLegend from './subPage/lineLegend';
// 方法
import moment from 'moment';
// 样式
import './style.less';
import GaugeLegend from './subPage/gaugeLegend';
import GeoLegend from './subPage/geoLegend';

export default () => {
  const curDate = useMemo(() => {
    const cur = new Date().getTime();
    return moment(cur).format('YYYY-MM-DD HH:mm:ss');
  }, []);
  return (
    <div className="dashboard-wrap">
      <header className="header">
        <h1>Welcome to my space,Lcc</h1>
        <h5>{curDate}</h5>
      </header>
      <div className="container">
        <div className="first-row">
          <div className="left">
            <RingLegend />
          </div>
          <div className="center">
            <LineLegend />
          </div>
          <div className="right">3</div>
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
