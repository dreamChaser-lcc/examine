import React, { FC, useRef, useState } from 'react';
// 样式
import './style.less';
// png
import portrait from '@/assets/images/portrait.png';
import loginRg from '@/assets/images/login-rg.png';
// 组件
import LoginTab from './component/LoginTab';
import LoginForm from './component/loginForm';

type formType = 'signIn' | 'signUp';
interface ILoginProps {}
const Login: FC<ILoginProps> = (props) => {
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
        <header className="login-title">
          <h1>Admin后台管理系统</h1>
        </header>
        <div className="login-layout">
          <div className="login-left">
            <div className="description">
              <h1 style={{ color: '#fafafa' }}>关于</h1>
              <ul>
                <li>语言：Typescript</li>
                <li>框架：React Hooks</li>
                <li>UI库：Ant design v4</li>
                <li>脚手架：Umi</li>
              </ul>
            </div>
            <img className="bottom-image" src={loginRg} alt="213" />
          </div>
          <div className="login-right">
            <div className="portrait">
              <img style={{ width: 50, height: 50 }} src={portrait} />
            </div>
            <div className="form-item">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
