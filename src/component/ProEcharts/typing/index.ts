import { EChartOption, EChartsResponsiveOption, EChartsType } from 'echarts';
import { CSSProperties } from 'react';

/**Echart的option类型 */
export type EChartOptionType = EChartOption | EChartsResponsiveOption;

/**基本样式配置*/
interface BaseWarpConfig {
  /**画布宽度 */
  width?: string | number;
  /**画布高度 */
  height?: string | number;
  /**画布样式 */
  wrapStyle?: CSSProperties;
  /**渲染主题 */
  theme?: object | string;
  /**渲染类型 canvas or svg  */
  renderer?: 'canvas' | 'svg';
  /**画布基本配置 */
  opts?: {
    devicePixelRatio?: number | undefined;
    /**渲染为canvas or svg */
    renderer?: 'canvas' | 'svg' | undefined;
    width?: number | string | undefined;
    height?: number | string | undefined;
  };
}

/**ProEcharts的属性 */
export interface IProEchartsPeops extends BaseWarpConfig {
  /**echarts配置 */
  option: EChartOptionType;
  /**是否与上一个选项合并 */
  notMerge?: boolean | undefined;
  /**是否懒加载 */
  lazyUpdate?: boolean | undefined;
  /**返回实例 */
  getInstance?: (instance: typeof echarts) => void;
  /**初始化之前的操作 */
  onBeforeInit?: (instance: typeof echarts) => void;
  /**初始化完成之后的操作 */
  onAfterInit?: (myChart: EChartsType, option: EChartOptionType) => void;
}
