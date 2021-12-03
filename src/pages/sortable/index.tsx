import { Alert, Card, Tag } from 'antd';
import React, { FC, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

interface ItemType {
  id: number;
  name: string;
  color: string;
}

export default () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'shrek1', color: '#f50' },
    { id: 2, name: 'fiona1', color: '#2db7f5' },
    { id: 1, name: 'shrek2', color: '#87d068' },
    { id: 2, name: 'fiona2', color: '#108ee9' },
    { id: 1, name: 'shrek3', color: '#000' },
    { id: 2, name: 'fiona3', color: '#2ee224' },
  ]);

  return (
    <>
      <Alert
        message="可拖拽交换数据的库"
        description="需要安装sortablejs,react-sortablejs,@types/sortablejs"
        type="info"
        style={{ margin: 20 }}
        showIcon
      />
      <Card title="可以拖动下列标签换位置" style={{ margin: 20 }}>
        <ReactSortable
          list={state}
          setList={(newState: ItemType[], sortable: any, store: any) => {
            setState(newState);
          }}
        >
          {state.map((item) => (
            <Tag  key={item.name} color={item.color}>
              {item.color}
            </Tag>
          ))}
        </ReactSortable>
      </Card>
    </>
  );
};
