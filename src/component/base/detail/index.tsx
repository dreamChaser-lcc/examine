import { FC, useState } from 'react';
// 组件
import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  notification,
  PageHeader,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  TreeSelect,
} from 'antd';
import DetailBlock from './detailBlock';
import { DetailOperationEnum } from './interface';
import { useForm } from 'antd/lib/form/Form';

interface IDetailProps {}
const Detail: FC<IDetailProps> = () => {
  const [form] = useForm();
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const CONFIG = {
    span: 12,
  };
  const getFieldValue = (name?: string) => {
    const result = form.getFieldsValue();
    console.log(result);
    return result;
  };
  const handleClick = (key: keyof typeof DetailOperationEnum) => {
    message.success(`点击了 ${DetailOperationEnum[key]}，key--${key}`);
  };

  const beforeSubmit = () => {
    form
      .validateFields()
      .then((res) => {
        notification.success({
          message: '成功',
          description: JSON.stringify(getFieldValue()),
        });
      })
      .catch((err) => {
        const { errorFields } = err;
        if (errorFields && Array.isArray(errorFields)) {
          errorFields.forEach((item) => {
            const info = item?.errors?.[0];
            notification.warning({
              message: info,
            });
          });
        }
      });
  };
  return (
    <div style={{ minHeight: '100%', background: '#fff' }}>
      <PageHeader
        onBack={() => {
          // history.goBack();
          handleClick('arrow');
        }}
        title="详情"
        // subTitle="This is a subtitle"
        extra={
          <Space>
            {/* <Switch
              unCheckedChildren="不可编辑"
              checkedChildren="可编辑"
              checked={isDetail}
              onChange={(able) => {
                getFieldValue();
                setIsDetail(able);
              }}
            /> */}
            <Button
              type="primary"
              onClick={() => {
                beforeSubmit();
              }}
            >
              获取表单
            </Button>
            <Button
              type="primary"
              onClick={() => {
                handleClick('confirm');
              }}
            >
              确定
            </Button>
            <Button
              onClick={() => {
                handleClick('cancel');
              }}
            >
              取消
            </Button>
          </Space>
        }
      />
      <Form labelCol={{ span: 6 }} layout="horizontal" form={form}>
        <Row>
          <Col {...CONFIG}>
            <Form.Item
              label="Form Size"
              name="size"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
            <Form.Item
              label="Input"
              name="inputVal"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col {...CONFIG}>
            <Form.Item
              label="Select"
              name="select"
              rules={[{ required: true }]}
            >
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
            <Form.Item
              label="TreeSelect"
              name="TreeSelect"
              rules={[{ required: true }]}
            >
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
            <Form.Item
              label="Cascader"
              name="Cascader"
              rules={[{ required: true }]}
            >
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
            <Form.Item label="DatePicker" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col {...CONFIG}>
            <Form.Item
              label="InputNumber"
              name="InputNumber"
              rules={[{ required: true }]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col {...CONFIG}>
            <Form.Item
              label="Switch"
              name="Switch"
              valuePropName="checked"
              rules={[{ required: true }]}
            >
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Detail;
