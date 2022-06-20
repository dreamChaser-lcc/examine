import { ProFormItemProps } from '@/component/base/deepForm/ProForm/interface';

export const formItems: ProFormItemProps[] = [
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
];
