import { useEffect } from 'react';
import _ from 'lodash';
/**
 * 窗口尺寸更改
 * @param handler 执行回调
 * @param delay 防抖时间
 */
export const useResize = (handler: () => void, delay?: number) => {
  useEffect(() => {
    /**防抖 500ms*/
    const callback = _.debounce(handler, delay || 500);
    window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', callback);
    };
  }, []);
};
