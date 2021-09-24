import React from 'react';
import { Card, Form, Input, Select } from 'antd';
const { Option } = Select;
const option = [
  { values: 'first', label: '第一' },
  { values: 'seconds', label: '第二' },
  { values: 'third', label: '第三' },
];

export default () => {
  const handleChange = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Card title="select" style={{ margin: '20px' }}>
        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select style={{ width: 120 }} onChange={handleChange}>
              {option.map((item) => {
                return (
                  <Option value={item.values} key={item.values}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
