import { FC } from 'react';
import './style.less';
import LineAndpie from '../lineAndpie/index';
import ScaleBox from '@/component/scaleBox';

interface IProps {}
const BigScreen: FC<IProps> = () => {
  const isbox = true;
  return isbox ? (
    <ScaleBox>
      <div id="big-screen">
        <header>
          <h1>echarts-explore</h1>
        </header>
        <div className="big-screen content">
          <aside>
            <div></div>
            <div></div>
            <div></div>
          </aside>
          <div>2{/* <LineAndpie /> */}</div>
          <aside>3</aside>
        </div>
      </div>
    </ScaleBox>
  ) : (
    <div id="big-screen">
      <header>
        <h1>echarts-explore</h1>
      </header>
      <div className="big-screen content">
        <aside>
          <div></div>
          <div></div>
          <div></div>
        </aside>
        <div>2{/* <LineAndpie /> */}</div>
        <aside>3</aside>
      </div>
    </div>
  );
};
export default BigScreen;
