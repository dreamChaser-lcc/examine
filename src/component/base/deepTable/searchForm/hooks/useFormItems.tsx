import { Col, Form, Input, Select } from 'antd';
import { ProFieldProps, ProFormItemProps, ProFormItemType } from '../interface';
import ProFormItem from '../proformItem';

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
    case 'Select':
      return <Select {...fieldProps?.Select} />;
    default:
      return <></>;
  }
};
/**
 *
 */
export const useFormItems = (formItemConfig: ProFormItemProps[]) => {
  const formItems = formItemConfig.map((record, index) => {
    const key = `${record?.name}+${index}`;
    // const { span, formItemType, fieldProps, ...restProps } = record;
    return (
      <ProFormItem key={key} {...record}>
        {renderField(record)}
      </ProFormItem>
    );
  });
  return {
    formItems,
  };
};
