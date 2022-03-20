// 组件
import Dheader from './subPage/dheader';
import DSummary from './subPage/dsummary';
import RingLegend from './subPage/ringlegend';
import LineLegend from './subPage/lineLegend';
import GaugeLegend from './subPage/gaugeLegend';
import GeoLegend from './subPage/geoLegend';
import TaskCard from './subPage/taskCard';
// 样式
import './style.less';

export default () => {
  return (
    <div className="dashboard-wrap">
      <header className="header">
        <Dheader />
      </header>
      <div className="container">
        <div id="summary">
          <DSummary />
        </div>
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
