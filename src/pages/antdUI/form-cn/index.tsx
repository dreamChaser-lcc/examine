import React from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';

export default () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const validator = async (rules: any, values: any) => {
    const str = values.replace(/\s+/g, '');

    if (str.length == 0) {
      throw new Error('12');
    }
  };
  //字段值更新触发的函数
  const fieldChange = (changedFields: any, allFields: any) => {
    // console.log(changedFields[0].name)
  };
  return (
    <>
      <Card title="form表单" style={{ margin: '20px' }}>
        <Form
          {...layout}
          name="basic"
          // labelAlign={"left"}
          labelCol={{ span: 2 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card title="自定义校验规则" style={{ margin: '20px' }}>
        <Form colon onFieldsChange={fieldChange}>
          <Form.Item
            wrapperCol={{ span: 3 }}
            name="custom"
            label={'不能大于5个字符'}
            rules={[{ validator: validator, message: '长度不能超过5个字符' }]}
          >
            <Input />
          </Form.Item>
        </Form>
        <Button type="primary">submit</Button>
      </Card>
    </>
  );
};
