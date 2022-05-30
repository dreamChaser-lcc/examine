import { Button, Col, Form, Input, Row, Select } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';
import { useFormItems } from './hooks/useFormItems';
import { ProFormItemProps } from './interface';
const config: ProFormItemProps[] = [
  {
    name: 'field1',
    // label: 'field1',
    formItemType: 'Input',
    span: 6,
    fieldProps: {
      Input: {
        name: '13',
        placeholder: 'field1',
      },
    },
  },
  {
    name: 'field2',
    // label: 'field2',
    formItemType: 'Select',
    span: 6,
    fieldProps: {
      Select: {
        placeholder: 'field2',
        options: [
          { label: '1', value: 1 },
          { label: '2', value: 2 },
        ],
      },
    },
  },
];

interface ISearchFormProps {}
const SearchForm: FC<ISearchFormProps> = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const  formItems = useFormItems(config);
  const getFields = () => {
    const count = expand ? 6 : 3;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={`Field ${i}`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            {i % 3 !== 1 ? (
              <Input placeholder="placeholder" />
            ) : (
              <Select defaultValue="2">
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">
                  longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                </Select.Option>
              </Select>
            )}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Form
        form={form}
        name="advanced_search"
        // className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{formItems}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                form.resetFields();
              }}
            >
              重置
            </Button>
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? (
                <>
                  <UpOutlined />
                  收起
                </>
              ) : (
                <>
                  <DownOutlined />
                  展开
                </>
              )}
            </a>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default SearchForm;
