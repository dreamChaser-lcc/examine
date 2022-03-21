import React, { useEffect, FC, useState, useRef, useCallback } from 'react';
// 组件
import { Button } from 'antd';
import DynamicModal from '@/component/dynamicModal';
import { useClickOutside } from './hooks/useClickOutside';
import ProCard from '@/component/ProCard';
// 方法
// 常量

/** 调试组件专用页面 */
export default (props: any) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const dropmemusRef = useRef<HTMLDivElement>(null);
  const [contentMenu, setContentMenu] = useState<{
    visible: boolean;
    left: number;
    top: number;
  }>();
  const handleCancel = () => {
    setContentMenu({
      visible: false,
      left: 0,
      top: 0,
    });
  };
  useClickOutside(dropmemusRef, handleCancel);

  return (
    <>
      <ProCard title="未完成">
        <div
          style={{
            cursor: 'pointer',
            width: 200,
            height: 200,
            backgroundColor: '#6F1E51',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            setContentMenu({
              visible: true,
              left: e.pageX,
              top: e.pageY,
            });
          }}
        >
          右键下拉菜单（未完成）
        </div>
        <div
          id="dropMenus"
          ref={dropmemusRef}
          style={{
            backgroundColor: '#fff',
            border: '1px solid #C1C1C1',
            position: 'fixed',
            left: contentMenu?.left,
            top: contentMenu?.top,
            zIndex: 999,
            padding: '10px',
            visibility: contentMenu?.visible ? 'visible' : 'hidden',
            cursor: 'pointer',
          }}
        >
          <div>菜单一</div>
          <div>菜单二</div>
          <div>菜单三</div>
        </div>
      </ProCard>
    </>
  );
};
