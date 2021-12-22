import { MutableRefObject } from 'react';

// 光标样式
export enum DIRECTION_Enum {
  T = 'n-resize',
  B = 's-resize',
  L = 'w-resize',
  R = 'e-resize',
  LT = 'nw-resize',
  LB = 'sw-resize',
  RT = 'ne-resize',
  RB = 'se-resize',
}
type refType = HTMLDivElement | null;
// 拖拽的div
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
export interface useModalProps extends divRefType {}
/**方向  上下左右 左上左下右上右下*/
export type directionType = 'T' | 'B' | 'L' | 'R' | 'LT' | 'LB' | 'RT' | 'RB';
