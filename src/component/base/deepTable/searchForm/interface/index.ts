import { ReactNode } from 'react';
import { FormItemProps, Rule } from 'antd/lib/form';
import { InputProps, InputRef, Select } from 'antd';

/**
 * 自动推断参数类型
 * inter 若 T 为函数返回:自动推断类型 P ，不为函数返回 any
 */
type GetParamType<T> = T extends (arg: infer P) => void ? P : any;

export type ProFormItemType = 'Input' | 'Select';
export interface ProFieldProps {
  /**文本输入框 */
  Input?: InputProps & React.RefAttributes<InputRef>;
  /**选择框 ( GetParamType 获取Select选择框组件参数) */
  Select?: GetParamType<typeof Select>;
}
export interface ProFormItemProps extends FormItemProps {
  name?: string | number | undefined;
  label?: ReactNode;
  /**表单类型 */
  formItemType: ProFormItemType;
  /**表单配置 */
  fieldProps: ProFieldProps;
  /**所占栅格 */
  span?: number | string;
  /**验证格式 */
  rules?: Rule[];
}
