import { FC, useContext, useMemo } from 'react';
// 组件
import { Button, Checkbox, Form, Input } from 'antd';
// 方法
import {
  clearRemenber,
  handleVerifyError,
  handleVerifySuccess,
  remenber,
} from '@/utils/loginpage/utils';
// 方法
import { user_login_api } from '@/api/user';
// 全局变量
import BaseContext from '@/globalContext';
// 常量
import { SUCCESS_STATUS_CODE } from '@/utils/common_utils';

interface ILoginForm {
  // 登录或register
  isLogin?: boolean;
}
const LoginForm: FC<ILoginForm> = () => {
  const { dispatch } = useContext(BaseContext);
  const user = useMemo(() => {
    const password = localStorage.getItem('password');
    const account = localStorage.getItem('account');
    const temp: Record<string, any> = {
      pwd: password,
      account: account,
    };
    return temp;
  }, []);
  const onFinish = async (values: any) => {
    const { account, password, remember } = values;
    const res = await user_login_api(account, password);
    if (res?.code === SUCCESS_STATUS_CODE) {
      const { token } = res.result;
      console.log(res);
      if (remember) {
        remenber(account, password, token);
      } else {
        clearRemenber();
      }
      dispatch('changeLoginState', true);
      window.location.replace('/');
      handleVerifySuccess('登录成功');
    }
  };
  const onFinishFailed = (errInfo: any) => {
    handleVerifyError(errInfo?.errorFields);
  };
  return (
    <div>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        initialValues={{
          remember: true,
          account: 'Admin',
          password: '123456',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="account"
          initialValue={user.account}
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="账号：Admin" />
        </Form.Item>

        <Form.Item
          name="password"
          initialValue={user.pwd}
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="密码：123456" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
LoginForm.defaultProps = {
  isLogin: true,
};
export default LoginForm;
