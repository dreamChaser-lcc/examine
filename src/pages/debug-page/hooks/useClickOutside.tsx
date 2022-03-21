import { RefObject, useEffect } from 'react';

/**
 * 鼠标点击菜单外
 * @param ref 右键下拉菜单的元素
 * @param handler 点击菜单外处理的事件
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      /**如果点击目标属于ref的子元素，则不执行handler(关闭下拉菜单) */
      if (ref.current && ref.current.contains(e.target as HTMLElement)) {
        return;
      }
      handler();
    };
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('click', listener);
    };
  });
};
