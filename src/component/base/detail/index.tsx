import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Radio,
  Select,
  Space,
  Switch,
  TreeSelect,
} from 'antd';
import { FC } from 'react';
import { history } from 'umi';

interface IDetailProps {}
const Detail: FC<IDetailProps> = () => {
  return (
    <div style={{ height: '100%', background: '#fff' }}>
      <PageHeader
        onBack={() => history.goBack()}
        title="Title"
        subTitle="This is a subtitle"
        extra={
          <Space>
            <Button type="primary">确定</Button>
            <Button>取消</Button>
          </Space>
        }
      />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        layout="horizontal"
        // initialValues={{ size: componentSize }}
        // onValuesChange={onFormLayoutChange}
        // size={componentSize as SizeType}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [{ title: 'Bamboo', value: 'bamboo' }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
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
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Detail;
