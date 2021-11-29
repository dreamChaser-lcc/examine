import React, { FC, useRef, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// 样式
import './style.less';
// 组件
import LoginTab from './component/LoginTab';

type formType = 'signIn' | 'signUp';
interface ILoginProps {}
const Login: FC<ILoginProps> = (props) => {
  console.log(props);
  const [formType, setFormType] = useState<formType>('signIn');
  const headRef = useRef<HTMLHeadElement>();
  const ref = React.createRef<HTMLHeadElement>();
  const handleTabChange = (e: any) => {
    const key = e.target.id;
    setFormType(key);
  };
  const handleFinish = () => {
    const el = document.querySelector('#header');
    
    console.log('formType', ref.current, '\nel', el);
  };
  return (
    <div className="login-container">
      <div className="login-wapper">
        <div className="login-position">
          <LoginTab
            onTabChange={handleTabChange}
            ref={ref}
            className="login-header"
          />
          <div className="login-form">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 10 }}
              initialValues={{ remember: true }}
              onFinish={handleFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                key="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input/>
                
              </Form.Item>                       

              <Form.Item
                label="Password"
                name="password"
                key="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
