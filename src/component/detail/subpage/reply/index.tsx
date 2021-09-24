import React, { FC } from 'react';
import { Button, Form, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { apiUrl } from '@/enum/apiUrl';
import { POST } from '@/axios';

interface IReplyProps {
  visiable: boolean;
  mesID: string;
  onHide: () => void; //隐藏回复框
}

const ReplyForm: FC<IReplyProps> = (props) => {
  const { visiable, onHide, mesID } = props;
  const [form] = Form.useForm();
  //点击取消
  const onReset = () => {
    form.resetFields();
    onHide?.();
  };
  //点击回复发出请求后
  const onFinish = (fieldsValue: any) => {
    const requestKey = { mesID, ...fieldsValue };
    POST(apiUrl.reply, requestKey);
    onReset();
  };
  return (
    <>
      {visiable ? (
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="reply">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 16, span: 8 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                确定回复
              </Button>
              <Button onClick={onReset}>取消</Button>
            </Space>
          </Form.Item>
        </Form>
      ) : (
        ''
      )}
    </>
  );
};
export default ReplyForm;
