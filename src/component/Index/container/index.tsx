// 组件
import Project from './sub/project';
import PlanList from './sub/planList';
// 常量
import './style.less';
import QuickNav from './sub/quickNav';
import RadarLegend from './sub/radarLegend';

export default () => {
  return (
    <div id="index-container-wrap">
      <div className="left">
        <Project />
        <PlanList />
      </div>
      <div className="right">
        <QuickNav />
        <RadarLegend />
      </div>
    </div>
  );
};
