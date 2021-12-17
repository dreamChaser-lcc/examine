import { useEffect, useRef, useState } from "react";
/**
 * 数据变动hooks
 * @param dataSource 数据源
 * @param config 展示动画配置
 * @param order 数据排序
 * @returns 
 */
export function useData(dataSource: any[], config: Record<string, any>, order: 'normal' | 'reverse') {
  const configRef = useRef(config);
  const timerRef = useRef<any>();
  const [formatData, setFormatData] = useState<any[]>();
  /**开始数据变动=>开始动画 */
  const playAnimate = () => {
    if (timerRef.current) {
      stopAnimate();
    };
    timerRef.current = setInterval(() => {
      const index = configRef.current?.curIndex;
      const size = configRef.current?.size;
      const length = configRef.current?.length;
      // 展示数据选取
      let result = dataSource.slice(index, index + size);
      if (index + size > length) {
        const startPartial = dataSource.slice(index, length);
        const endPartial = dataSource.slice(0, index + size - length);
        result = startPartial.concat(endPartial);
      }
      // 索引递增
      configRef.current.curIndex = (index + 1) % length;
      // 是否反序输出
      if (order === 'reverse') {
        const reverse = result.reverse();
        setFormatData(reverse);
      } else {
        setFormatData(result);
      }
    }, configRef.current.time);
  }
  /**停止数据变动=>停止动画 */
  const stopAnimate = () => {
    clearInterval(timerRef.current);
  }
  useEffect(() => {
    playAnimate()
    return stopAnimate;
  }, []);
  return {
    formatData,
    playAnimate,
    stopAnimate
  }
}