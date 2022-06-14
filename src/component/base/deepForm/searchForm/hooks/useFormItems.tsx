// 组件
import {
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
// 常量
import { ProFormItemProps } from '../interface';
import ProFormItem from '../proFormItems';

/**
 *渲染的表单元素
 * @param {ProFormItemProps } formItemConfig 表单配置
 * @returns 表单元素
 */
export const renderField = (formItemConfig: ProFormItemProps) => {
  const { formItemType, fieldProps } = formItemConfig;
  switch (formItemType) {
    case 'Input':
      return <Input {...fieldProps?.Input} />;
    case 'InputNumber':
      return <InputNumber {...fieldProps?.InputNumber} />;
    case 'Select':
      return <Select {...fieldProps?.Select} />;
    case 'TreeSelect':
      return <TreeSelect {...fieldProps?.TreeSelect} />;
    case 'Cascader':
      return <Cascader {...fieldProps?.Cascader} />;
    case 'DatePicker':
      return <DatePicker {...fieldProps?.DatePicker} />;
    case 'Switch':
      return <Switch {...fieldProps?.Switch} />;
    default:
      return null;
  }
};
/**
 * 生成formItems
 */
export const useFormItems = (
  formItemConfig: ProFormItemProps[],
  isSearch?: boolean,
) => {
  const formItems = formItemConfig.map((record, index) => {
    const key = `${record?.name}+${index}`;
    // const { span, formItemType, fieldProps, ...restProps } = record;
    return (
      <ProFormItem isSearch={isSearch} key={key} {...record}>
        {renderField(record)}
      </ProFormItem>
    );
  });
  return formItems;
};
