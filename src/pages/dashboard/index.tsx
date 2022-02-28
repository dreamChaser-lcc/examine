import { useMemo } from 'react';
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
    <>
      <div className="dashboard-wrap">
        <header>
          <h1>Welcome to my space,Lcc</h1>
          <h5>{curDate}</h5>
        </header>
        <div className="container">
          <div className="first-row">
            <div className="left">1</div>

            <div className="center">2</div>

            <div className="right">3</div>
          </div>
          <div className="second-row">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </>
  );
};
