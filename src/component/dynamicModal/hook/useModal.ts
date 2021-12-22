import { translate } from '@antv/g2/lib/util/transform';
import { MutableRefObject, useEffect } from 'react';
type refType = HTMLDivElement | null;
interface divRefType {
  resizeTRef: MutableRefObject<refType>;
  resizeBRef: MutableRefObject<refType>;
  resizeLRef: MutableRefObject<refType>;
  resizeRRef: MutableRefObject<refType>;
  resizeLTRef: MutableRefObject<refType>;
  resizeLBRef: MutableRefObject<refType>;
  resizeRTRef: MutableRefObject<refType>;
  resizeRBRef: MutableRefObject<refType>;
  modalRef: MutableRefObject<refType>;
  titleRef: MutableRefObject<refType>;
  modalWarpRef: MutableRefObject<refType>;
}
interface useModalProps extends divRefType { }
type directionType = | 'L' | 'R' | 'T' | 'B' | 'LT' | 'LB' | 'RT' | 'RB';
export const useModal = (props: useModalProps) => {
  const {
    resizeTRef,
    resizeBRef,
    resizeLRef,
    resizeRRef,
    resizeLTRef,
    resizeLBRef,
    resizeRTRef,
    resizeRBRef,
    modalRef,
    titleRef,
  } = props;

  const mousePosition = { x: 0, y: 0 };
  // 获取鼠标点击位置
  const getClickPosition = (e: MouseEvent) =>
    Object.assign(mousePosition, { x: e.pageX, y: e.pageY });

  document.documentElement.addEventListener('click', getClickPosition, true);

  /**
   * 拖拽弹窗
   * @param oDrag 拖拽的div
   * @param handle 鼠标按下div
   */
  function drag(oDrag: HTMLDivElement, handle: HTMLDivElement) {
    let disX = 0;
    handle = handle || oDrag;
    handle.style.cursor = 'move';
    handle.onmousedown = function (event) {
      /**弹窗与视口左侧的距离 */
      disX = event.clientX - oDrag.offsetLeft;
      /**弹窗与视口顶部的距离 */
      const disY = event.clientY - oDrag.offsetTop;
      const mousemove = (event: MouseEvent) => {
        /**水平移动距离 */
        let iL = event.clientX - disX;
        /**垂直移动距离 */
        let iT = event.clientY - disY;
        /**视口宽 - 弹窗宽 = 最大水平移动距离 */
        const maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
        /**视口高 - 弹窗高 = 最大垂直移动距离 */
        const maxT = document.documentElement.clientHeight - oDrag.offsetHeight;

        iL <= 0 && (iL = 0);
        iT <= 0 && (iT = 0);
        iL >= maxL && (iL = maxL);
        iT >= maxT && (iT = maxT);

        oDrag.style.left = iL + 'px';
        oDrag.style.top = iT + 'px';

        return false;
      };

      const mouseup = () => {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      };
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      return false;
    };
  }
  /**
   * 调整弹窗大小
   * @param oDrag 拖拽的div
   * @param handle 鼠标按下div
   */
  function resize(oDrag: HTMLDivElement, handle: HTMLDivElement, direction: directionType) {
    handle.onmousedown = function (event) {
      event.preventDefault()
      event.stopPropagation();
      const diffX = event.clientX - oDrag.offsetLeft;
      const diffY = event.clientY - oDrag.getBoundingClientRect().top;
      const mousemove = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation();
        const extendX = event.clientX - diffX;
        const extendY = event.clientY - 1;
        console.log(extendX, diffX, extendY, diffY)
        switch (direction) {
          // case 'L': {
          //   // oDrag.style.width = extendX + 'px';
          //   oDrag.style.height += extendY + 'px';
          //   break;
          // }
          // case 'R': {
          //   oDrag.style.width += extendX + 'px';
          //   // oDrag.style.height = extendY + 'px';
          //   break;
          // }
          case 'T': {
            console.log(oDrag.getBoundingClientRect().height, extendY)

            // oDrag.style.top = event.clientY - diffY + 'px';
            oDrag.style.height = oDrag.offsetHeight + oDrag.offsetTop - event.clientY + 'px';
            oDrag.style.top = event.clientY + 'px';
            break;
          }
          // case 'B': {
          //   oDrag.style.width = extendX + 'px';
          //   oDrag.style.height = extendY + 'px';
          //   break;
          // }
          // case 'LT': {
          //   oDrag.style.left = extendX + 'px';
          //   oDrag.style.top = extendY + 'px';
          //   break;
          // }
          // case 'LB': {
          //   oDrag.style.left = extendX + 'px';
          //   oDrag.style.bottom = extendY + 'px';
          //   break;
          // }
          // case 'RT': {
          //   oDrag.style.left = extendX + 'px';
          //   oDrag.style.top = extendY + 'px';
          //   break;
          // }
          // case 'RB': {
          //   oDrag.style.left = extendX + 'px';
          //   oDrag.style.bottom = extendY + 'px';
          //   break;
          // }
        }
      }
      const mouseup = () => {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      }
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);

    }
  }
  const initWindow = () => {
    drag(modalRef.current!, titleRef.current!);
    // 向上调整
    resize(modalRef.current!, resizeTRef.current!, 'T');
    // // 向下调整
    // resize(modalRef.current!, resizeBRef.current!, 'B');
    // // 向左调整
    // resize(modalRef.current!, resizeLRef.current!, 'L');
    // // 向右调整
    // resize(modalRef.current!, resizeRRef.current!, 'R');
    // // 向左上调整
    // resize(modalRef.current!, resizeLTRef.current!, 'LT');
    // // 向左下调整
    // resize(modalRef.current!, resizeLBRef.current!, 'LB');
    // // 向右上调整
    // resize(modalRef.current!, resizeRTRef.current!, 'RT');
    // // 向右下调整
    // resize(modalRef.current!, resizeRBRef.current!, 'RB');

    const { x, y } = mousePosition;

    // 模态框的位置
    const { left, top } = modalRef.current!.getBoundingClientRect();
    // 设置弹出的位置
    // modalRef.current!.style.transformOrigin = `${x - left}px ${y - top}px`;
  };

  useEffect(() => {
    initWindow();
  }, []);
  return {};
};
