import { FC, useEffect, useRef } from 'react';
// 方法
import { debounce } from 'lodash';
// 样式
import './style.less';

interface IProps {}
/**
 * 比率缩放布局盒子组件
 */
const ScaleBox: FC<IProps> = (props) => {
  console.log(props)
  const isFirstRenderRef = useRef<boolean>(true);
  const setScale = () => {
    let designWidth = 1920; //设计稿的宽度
    let designHeight = 1080; //设计稿的高度
    // 取宽度、高度中最小变化比，作为缩放比例
    let scale =
      document.documentElement.clientWidth /
        document.documentElement.clientHeight <
      designWidth / designHeight 
        ? document.documentElement.clientWidth / designWidth
        : document.documentElement.clientHeight / designHeight;
    const scaleElement = document.querySelector('#screen') as HTMLElement;
    scaleElement.style.transform = `scale(${scale}) translate(-50%)`;
  };
  useEffect(() => {
    setScale();
  }, []);
  useEffect(() => {
    window.onresize = debounce(() => {
      setScale();
    }, 500);
    return () => {
      window.onresize = null;
    };
  });

  return (
    <div id="screen-wrapper">
      <div className="screen" id="screen">
        {/* <div className="section">A</div>
        <div className="section">B</div>
        <div className="section">C</div>
        <div className="section">D</div>
        <div className="section">E</div> */}
        {props.children}
      </div>
    </div>
  );
};
export default ScaleBox;
