/*
 * @Author: lcc
 * @Date: 2023-05-25 22:04:40
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-26 01:09:56
 * @Description:
 */

import { FC, useEffect } from 'react';
import LoginForm from './component/loginForm';
import './style.less';

interface ILoginProps {}
const Login: FC<ILoginProps> = (props) => {
  // 手动添加mate标签
  const addMeta = (name: string, content: string) => {
    const meta = document.createElement('meta');
    meta.content = content;
    meta.name = name;
    document.getElementsByTagName('head')[0].appendChild(meta);
  };
  // useEffect(()=>{
  //   // 图片防盗链问题
  //   addMeta("referrer","no-referrer")
  // },[])

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login Now</h1>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
