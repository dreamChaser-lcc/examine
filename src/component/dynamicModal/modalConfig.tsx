import { Button } from 'antd';
import { ReactNode } from 'react';

export const initBody: ReactNode = (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    <li>① 可拖拽</li>
    <li>② 可八个方位扩展</li>
    <li>③ 可全屏/还原初始</li>
    <li>④ 可自定义title,body,footer</li>
    <li>⑤ 可添加title等额外样式</li>
  </ul>
);
export const initOperate = (
  onCancel?: Function,
  onOk?: Function,
): ReactNode[] => {
  const operate = [
    <Button
      onClick={() => {
        onCancel?.();
      }}
    >
      取消
    </Button>,
    <Button
      type="primary"
      onClick={() => {
        onOk?.();
      }}
    >
      确定
    </Button>,
  ];
  return operate;
};
