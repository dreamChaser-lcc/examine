import { ProFormItemProps } from '@/component/base/deepForm/ProForm/interface';

export const formItems: ProFormItemProps[] = [
  {
    label: '姓名',
    name: 'name',
    formItemType: 'Input',
    rules: [{ required: true }],
  },
  {
    label: '性别',
    name: 'gender',
    formItemType: 'Select',
    fieldProps: {
      Select: {
        options: [
          { label: 'boy', value: 'boy' },
          { label: 'girl', value: 'girl' },
        ],
      },
    },
    rules: [{ required: true }],
  },
  {
    label: 'treeSelect',
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
    label: '详细地址',
    name: 'address',
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
    label: '激活状态',
    name: 'activeStatus',
    formItemType: 'Switch',
    valuePropName: 'checked',
    rules: [{ required: true }],
  },
];
