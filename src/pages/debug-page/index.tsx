import React, { useEffect, FC, useState, useRef, useCallback } from 'react';
// 组件
import { Button } from 'antd';
import DynamicModal from '@/component/dynamicModal';
// 方法
// 常量

/** 调试组件专用页面 */
export default (props: any) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const open = () => {
    setDisabled(true);
  };
  const close = () => {
    setDisabled(false);
  };
  return (
    <>
      <Button type="primary" onClick={open}>
        打开弹窗
      </Button>
      <DynamicModal
        visible={disabled}
        onCancel={close}
        title={'自定义头部'}
        bodyExtraClass="body-extra"
      >
        {/* <div>this my custom children</div> */}
      </DynamicModal>
    </>
  );
};
