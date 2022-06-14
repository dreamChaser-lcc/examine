import { FC, useRef, useState } from 'react';
// 组件
import { Button, message, notification, PageHeader, Space } from 'antd';
import { DetailOperationEnum } from './interface';
import { useForm } from 'antd/lib/form/Form';
// 常量
import { FormActionType } from '../deepForm/ProForm/interface';
import DeepForm from '../deepForm';

interface IDetailProps {}
const Detail: FC<IDetailProps> = () => {
  const [form] = useForm();
  const formRef = useRef<FormActionType>();
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
    const values = formRef.current?.onValidate();
    console.log(values)
    // form
    //   .validateFields()
    //   .then((res) => {
    //     notification.success({
    //       message: '成功',
    //       description: JSON.stringify(getFieldValue()),
    //     });
    //   })
    //   .catch((err) => {
    //     const { errorFields } = err;
    //     if (errorFields && Array.isArray(errorFields)) {
    //       errorFields.forEach((item) => {
    //         const info = item?.errors?.[0];
    //         notification.warning({
    //           message: info,
    //         });
    //       });
    //     }
    //   });
  };
  return (
    <div
      style={{
        minHeight: '100%',
        background: '#fff',
        // backgroundImage: `url(${cell})`,
      }}
    >
      <PageHeader
        onBack={() => {
          // history.goBack();
          handleClick('arrow');
        }}
        style={{
          // background: '#f1f2f6',
          marginBottom: 20,
          borderBottom: '1px solid #dfe6e9',
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
      <DeepForm
        actionRef={formRef}
        labelCol={{ span: 6 }}
        formItems={[
          {
            label: 'Input',
            name: 'inputVal',
            formItemType: 'Input',
            rules: [{ required: true }],
          },
          {
            label: 'Select',
            name: 'select',
            formItemType: 'Select',
            fieldProps: {
              Select: {
                options: [{ label: 'Demo', value: 'demo' }],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'TreeSelect',
            name: 'treeSelect',
            formItemType: 'TreeSelect',
            fieldProps: {
              TreeSelect: {
                treeData: [
                  {
                    title: 'Light',
                    value: 'light',
                    children: [{ title: 'Bamboo', value: 'bamboo' }],
                  },
                ],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'Cascader',
            name: 'cascader',
            formItemType: 'Cascader',
            fieldProps: {
              Cascader: {
                options: [
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
                ],
              },
            },
            rules: [{ required: true }],
          },
          {
            label: 'DatePicker',
            name: 'datePicker',
            formItemType: 'DatePicker',
            rules: [{ required: true }],
          },
          {
            label: 'InputNumber',
            name: 'inputNumber',
            formItemType: 'InputNumber',
            rules: [{ required: true }],
          },
          {
            label: 'Switch',
            name: 'inputNumber',
            formItemType: 'Switch',
            valuePropName: 'checked',
            rules: [{ required: true }],
          },
        ]}
      />
    </div>
  );
};
export default Detail;
