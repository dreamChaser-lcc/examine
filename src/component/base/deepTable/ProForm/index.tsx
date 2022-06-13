import { FC, ReactNode } from 'react';
// 组件
import { Form, FormProps, Row } from 'antd';
import { ProFormItemProps } from '../searchForm/interface';
import { useFormItems } from '../searchForm/hooks/useFormItems';

export interface IProFormProps
  extends FormProps,
    Pick<ProFormItemProps, 'isSearch'> {
  /**表单配置 */
  formItems: ProFormItemProps[];
  /**额外添加非表单元素 */
  extraNode?: ReactNode;
}
const ProForm: FC<IProFormProps> = (props) => {
  const { children, extraNode, formItems, isSearch, ...restProps } = props;
  const [form] = Form.useForm();

  const newFormItems = useFormItems(formItems, isSearch);
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      form={form}
      // name="advanced_search"
      // className="ant-advanced-search-form"
      onFinish={onFinish}
      {...restProps}
    >
      <Row gutter={24}>
        {newFormItems}
        {extraNode}
      </Row>
    </Form>
  );
};
export default ProForm;
