import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  PageHeader,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  TreeSelect,
} from 'antd';
import { FC } from 'react';
import { history } from 'umi';

interface IDetailProps {}
const Detail: FC<IDetailProps> = () => {
  const CONFIG = {
    span: 12,
  };
  const isDetail = true;
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
        labelCol={{ span: 6 }}
        layout="horizontal"
        // initialValues={{ size: componentSize }}
        // onValuesChange={onFormLayoutChange}
        // size={componentSize as SizeType}
      >
        <Row>
          <Col {...CONFIG}>
            <Form.Item label="Form Size" name="size">
            {isDetail?<div style={{borderBottom:"1px dashed #95afc0"}}>samllasdasdasd</div>:
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>}
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col {...CONFIG}>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
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
          </Col>
        </Row>
        <Row>
          <Col {...CONFIG}>
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
          </Col>
          <Col {...CONFIG}>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col {...CONFIG}>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Detail;
