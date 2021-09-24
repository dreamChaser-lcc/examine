import { Form, FormProps, InputProps, Select, SelectProps } from 'antd';
import React, { FC } from 'react';

type propsname = 'inputProps' | 'selectProps' | 'datePickerProps';

type Pick<T, K extends keyof T> = FormProps &
  {
    [name in K]?: T[name];
  };
interface formItemProps {
  inputProps: InputProps;
}
interface DevelopForm {
  itemType: propsname;
  formItems: FormProps;
  inputProps: InputProps;
}

const { Option } = Select;
const option = [
  { values: 'first', label: '第一' },
  { values: 'seconds', label: '第二' },
  { values: 'third', label: '第三' },
];
const DevelopForm: FC<DevelopForm> = (props) => {
  return (
    <>
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select style={{ width: 120 }}>
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
    </>
  );
};

export default DevelopForm;
