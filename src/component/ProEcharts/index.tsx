import { FC, useEffect, useRef } from 'react';
// 组件
import * as echarts from 'echarts';
/**常量 */
import { IProEchartsPeops } from './typing';

/**简单封装echarts 初始化画布宽高 */
const ProEcharts: FC<IProEchartsPeops> = (props) => {
  const {
    width,
    height,
    wrapStyle,
    theme,
    opts,
    renderer,
    option,
    notMerge,
    lazyUpdate,
    getInstance,
    onBeforeInit,
    onAfterInit,
  } = props;

  /**渲染节点 */
  const warpDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getInstance?.(echarts);
  }, [echarts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (warpDom.current !== null) {
        /**初始化之前 */
        onBeforeInit?.(echarts);
        /**初始化 */
        const warpTheme = theme ? theme : undefined;
        const myChart =
          echarts.getInstanceByDom(warpDom.current) ||
          echarts.init(warpDom.current, warpTheme, { renderer, ...opts });

        /**初始化之后*/
        if (typeof onAfterInit === 'function') {
          onAfterInit(myChart, option);
        } else {
          option && myChart.setOption(option, notMerge, lazyUpdate);
        }
      }
    });
    return () => {
      clearTimeout(timer);
    };
  }, [option, warpDom, renderer, theme, opts, onBeforeInit, onAfterInit]);

  return <div ref={warpDom} style={{ width, height, ...wrapStyle }}></div>;
};
ProEcharts.defaultProps = {
  width: '100%',
  height: 300,
};
export default ProEcharts;
