import Detail from '@/component/base/detail';
import { Button } from 'antd';
import { useRef } from 'react';
import Table from '../table';

export default () => {
  const actionRef = useRef<any>();
  const visible = useRef<boolean>(false);
  const detailData = {
    inputVal: '123',
    select: '123',
    cascader: '123',
    inputNumber: 123,
  };
  const handleClick = () => {
    if (!visible.current) {
      actionRef.current.edit(detailData);
      visible.current = true;
    } else {
      actionRef.current.hide();
      visible.current = false;
    }
  };
  return (
    <>
      <Button onClick={handleClick}>show/hide</Button>
      <Table />
      <Detail
        bindId="tableId"
        actionRef={actionRef}
        formItems={[
          {
            label: 'Input',
            name: 'inputVal',
            formItemType: 'Input',
            rules: [{ required: true }],
          },
          {
            label: 'Select',
            name: 'select',
            formItemType: 'Select',
            fieldProps: {
              Select: {
                options: [{ label: 'Demo', value: 'demo' }],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'TreeSelect',
            name: 'treeSelect',
            formItemType: 'TreeSelect',
            fieldProps: {
              TreeSelect: {
                treeData: [
                  {
                    title: 'Light',
                    value: 'light',
                    children: [{ title: 'Bamboo', value: 'bamboo' }],
                  },
                ],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'Cascader',
            name: 'cascader',
            formItemType: 'Cascader',
            fieldProps: {
              Cascader: {
                options: [
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'DatePicker',
            name: 'datePicker',
            formItemType: 'DatePicker',
            rules: [{ required: true }],
          },
          {
            label: 'InputNumber',
            name: 'inputNumber',
            formItemType: 'InputNumber',
            rules: [{ required: true }],
          },
          {
            label: 'Switch',
            name: 'Switch',
            formItemType: 'Switch',
            valuePropName: 'checked',
            rules: [{ required: true }],
          },
        ]}
      />
    </>
  );
};
