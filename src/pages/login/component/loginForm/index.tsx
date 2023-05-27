/*
 * @Author: dreamChaser-lcc
 * @Date: 2021-12-31 17:06:21
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-26 00:09:43
 * @Description:
 */
import { FC, useContext, useMemo } from 'react';
// 组件
import { Button, Checkbox, Form, Input } from 'antd';
// 方法
import {
  clearRemenber,
  handleVerifyError,
  handleVerifySuccess,
  remenber,
} from '@/utils/login.utils';
// 方法
import { user_login_api } from '@/api/user';
// 全局变量
import BaseContext from '@/globalContext';
// 常量
import { SUCCESS_STATUS_CODE } from '@/constants/common';
import { history } from 'umi';

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
      // console.log(res);
      if (remember) {
        remenber(account, password, token);
      } else {
        clearRemenber();
      }
      dispatch('changeLoginState', true);
      handleVerifySuccess('登录成功');
      setTimeout(() => {
        history.push('/');
      });
      // window.location.replace('/');
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
          // initialValue={user.account}
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input size="large" placeholder="账号：Admin" />
        </Form.Item>

        <Form.Item
          name="password"
          // initialValue={user.pwd}
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password size="large" placeholder="密码：123456" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox style={{ color: '#fff' }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: '100%' }}
          >
            login
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
