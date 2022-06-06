import { FC, useEffect, useRef, useState } from 'react';
// 组件
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { renderField, useFormItems } from './hooks/useFormItems';
// 常量
import { FormItemWidthEnum, ProFormItemProps } from './interface';
import { useResize } from '@/hooks/useResize';

const config: ProFormItemProps[] = [
  {
    name: 'field1',
    label: 'field1',
    formItemType: 'Input',
    // span: 6,
    fieldProps: {
      Input: {
        name: '13',
        placeholder: 'field1',
      },
    },
  },
  {
    name: 'field2',
    label: 'field2',
    formItemType: 'Select',
    // span: 6,
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
  {
    name: 'field3',
    label: 'field3',
    formItemType: 'Select',
    // span: 6,
    fieldProps: {
      Select: {
        placeholder: 'field3',
        options: [
          { label: '1', value: 1 },
          { label: '2', value: 2 },
        ],
      },
    },
  },
  {
    name: 'field4',
    label: 'field4',
    formItemType: 'Select',
    // span: 6,
    fieldProps: {
      Select: {
        placeholder: 'field4',
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
  const [itemConfig, setItemConfig] = useState<ProFormItemProps[]>([]);
  const [form] = Form.useForm();
  const wrapDomRef = useRef<HTMLDivElement>(null);

  /**不需要放入弹窗的formItem */
  const getSimpleItem = () => {
    let usAbleWidth =
      (wrapDomRef.current &&
        wrapDomRef.current?.clientWidth - FormItemWidthEnum['Operation']) ||
      0;
    const arr: ProFormItemProps[] = [];
    config.every((item) => {
      usAbleWidth -= FormItemWidthEnum[item.formItemType] ?? 0;
      const pushAble = usAbleWidth > 0;
      if (pushAble) {
        arr.push(item);
      }
      return pushAble;
    });
    setItemConfig(arr);
  };
  useResize(() => {
    getSimpleItem();
  });

  const { formItems } = useFormItems(itemConfig);
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
    <div ref={wrapDomRef}>
      <Form
        form={form}
        name="advanced_search"
        // className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        {/* <useProFormContent.Provider value={{ form, dataFormats: {} }}> */}
        <Row gutter={24}>
          {formItems}
          <Col style={{ textAlign: 'right' }}>
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                console.log('in', form.getFieldsValue(true));
                form.resetFields();
              }}
            >
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              type="primary"
              style={{
                fontSize: 12,
                borderLeft: '1px solid #dfe6e9',
              }}
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
            </Button>
          </Col>
        </Row>
        {/* </useProFormContent.Provider> */}
      </Form>
    </div>
  );
};
export default SearchForm;
