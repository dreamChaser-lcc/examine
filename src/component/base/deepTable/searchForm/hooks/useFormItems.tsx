import { Col, Form, Input, Select } from 'antd';
import { ProFieldProps, ProFormItemProps, ProFormItemType } from '../interface';
import ProFormItem from '../proformItem';


/**
 *渲染的表单元素
 * @param {ProFormItemType} formItemType 表单元素类型
 * @param {ProFieldProps} fieldProps  表单元素配置
 * @param {ProFormItemProps } formItemConfig 表单配置
 * @returns 表单元素
 */
const renderField = (
  formItemType: ProFormItemType,
  fieldProps: ProFieldProps,
  formItemConfig: ProFormItemProps,
) => {
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
  // const formItems = formItemConfig.map((record, index) => {
  //   const key = `${record?.name}+${index}`;
    const { span, formItemType, fieldProps, ...restProps } = formItemConfig[0];
  //   const label = record?.label;
    return [(
      <ProFormItem {...formItemConfig[0]}>
        {renderField(formItemType, fieldProps, formItemConfig[0])}
      </ProFormItem>
    )];
  // });
  // return {
  //   formItems,
  // };
};
