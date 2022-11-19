/*
 * @Author: lcc
 * @Date: 2022-11-19 20:15:16
 * @LastEditors: lcc
 * @LastEditTime: 2022-11-19 21:02:35
 * @Description: loading组件
 */
import { FC } from 'react';
import './style.less';

interface IProps {
  title?: string;
  /** 加载文案**/
  desc?: string;
}
const Loading: FC<IProps> = (props) => {
  const { title, desc } = props;
  const randomDesc = [
    '正在加载中，马上就出来了 . . .',
    '正在火速加载中，请稍等...',
  ];
  const realDesc = randomDesc[Math.round(Math.random())];

  return (
    <>
      <div className="loading-wrap">
        {/* <div className="loading-title"> { title } </div> */}
        <div className="loading-desc"> {desc ? desc : realDesc} </div>
        <div className="loading-animation">
          <div className="loading-animation-header-top"></div>
          <div className="loading-animation-header-bottom"></div>
          <div className="loading-animation-dot-1"></div>
          <div className="loading-animation-dot-2"></div>
          <div className="loading-animation-dot-3"></div>
        </div>
      </div>
    </>
  );
};
Loading.defaultProps = {
  title: 'Gourd',
};
export default Loading;
