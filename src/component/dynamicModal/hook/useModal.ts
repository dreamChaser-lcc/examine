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

  function drag(oDrag: HTMLDivElement, handle: HTMLDivElement) {

    let disX = 0;
    handle = handle || oDrag;
    handle.style.cursor = 'move';
    handle.onmousedown = function (event) {
      disX = event.clientX - oDrag.offsetLeft;
      const disY = event.clientY - oDrag.offsetTop;
      const mousemove = (event: MouseEvent) => {
        console.log("event.clientX", document.documentElement.clientWidth)
        // console.log('in', oDrag.offsetLeft, event.clientX, document.documentElement.clientWidth);
        let iL = event.clientX - disX;
        let iT = event.clientY - disY;
        const maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
        const maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
        console.log("iL iT", iL, iT)
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
  const initWindow = () => {
    drag(modalRef.current!, titleRef.current!);
    const { x, y } = mousePosition;

    // 模态框的位置
    const { left, top } = modalRef.current!.getBoundingClientRect();
    // 设置弹出的位置
    modalRef.current!.style.transformOrigin = `${x - left}px ${y - top}px`;
  };

  useEffect(() => {
    initWindow();
  }, []);
  return {};
};
