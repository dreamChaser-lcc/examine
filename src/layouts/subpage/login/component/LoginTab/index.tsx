import { FC } from 'react';
import Tab, { ILoginTab } from './LoginTab';

export type ITabComponent = FC<
  ILoginTab & React.RefAttributes<HTMLHeadElement>
>;

const LoginTab = Tab as ITabComponent;
export default LoginTab;
