import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
// 组件
import {
  Button,
  Col,
  Drawer,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
} from 'antd';
import { FunnelPlotOutlined, DownOutlined } from '@ant-design/icons';
import { renderField, useFormItems } from './hooks/useFormItems';
// 常量
import { FormItemWidthEnum, ProFormItemProps } from './interface';
import { useResize } from '@/hooks/useResize';
import ProForm from '../ProForm';

const config: ProFormItemProps[] = [
  {
    name: 'field1',
    label: 'field1',
    formItemType: 'Input',
    // span: 6,
    rules: [{ required: true }],
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
    rules: [{ required: true }],
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
  {
    name: 'field5',
    label: 'field5',
    formItemType: 'Select',
    // span: 6,
    fieldProps: {
      Select: {
        placeholder: 'field5',
        options: [
          { label: '1', value: 1 },
          { label: '2', value: 2 },
        ],
      },
    },
  },
  {
    name: 'field6',
    label: 'field6',
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
/**查询项 */
const SearchForm: FC<ISearchFormProps> = (props) => {
  const [expand, setExpand] = useState(false);
  /**非弹出，默认显示的 */
  const [itemConfig, setItemConfig] = useState<ProFormItemProps[]>([]);
  /**弹出抽屉的表单 */
  const [expandItems, setExpandItems] = useState<ProFormItemProps[]>([]);

  const [form] = Form.useForm<FormInstance>();
  const [expandForm] = Form.useForm<FormInstance>();
  const wrapDomRef = useRef<HTMLDivElement>(null);

  /**formItems分类 */
  const getSimpleItem = () => {
    let usAbleWidth =
      (wrapDomRef.current &&
        wrapDomRef.current?.clientWidth - FormItemWidthEnum['Operation']) ||
      0;
    const defaultItems: ProFormItemProps[] = [];
    const expandItems: ProFormItemProps[] = [];
    config.forEach((item) => {
      usAbleWidth -= FormItemWidthEnum[item.formItemType] ?? 0;
      const pushAble = usAbleWidth > 0;
      if (pushAble) {
        defaultItems.push(item);
      } else {
        expandItems.push(item);
      }
    });
    setItemConfig(defaultItems);
    setExpandItems(expandItems);
  };
  useResize(() => {
    getSimpleItem();
  });
  /**更多查询展开 */
  const changeMoreSearchAble = () => {
    setExpand(!expand);
  };
  /**查询&重置 */
  const searchBtn = () => {
    return (
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
        {expandItems.length ? (
          <Button
            type="primary"
            style={{
              fontSize: 14,
              padding: '0 10px',
              borderLeft: '1px solid #dfe6e9',
            }}
            onClick={changeMoreSearchAble}
          >
            <FunnelPlotOutlined />
          </Button>
        ) : null}
      </Col>
    );
  };
  const onSubmit = () => {
    form.validateFields();
  };
  const onFinish = (values: any) => {
    console.log('Received values of form1: ', values);
  };
  return (
    <div
      ref={wrapDomRef}
      style={{
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: '1px solid rgb(220, 221, 225)',
      }}
    >
      <ProForm
        form={form}
        isSearch={true}
        formItems={itemConfig}
        extraNode={searchBtn()}
        onFinish={onFinish}
      />
      {expandItems.length ? (
        <Drawer
          title="更多查询"
          width={400}
          onClose={changeMoreSearchAble}
          visible={expand}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Button onClick={onSubmit} type="primary">
              Submit
            </Button>
          }
        >
          <ProForm
            form={expandForm}
            formItems={expandItems}
            onFinish={onFinish}
            hideRequiredMark
          />
        </Drawer>
      ) : null}
    </div>
  );
};
export default SearchForm;
