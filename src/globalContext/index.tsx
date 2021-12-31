import { createContext } from 'react';
import { actionType } from '@/globalContext/hook';

export interface IContextProps {
  routerTabs: any[];
  // 是否登录
  isLogin?: boolean;
}
interface Ifunc extends IContextProps {
  // 修改
  dispatch: (action: actionType, payload: any) => void;
}
// 创建Context
const BaseContext = createContext<Ifunc>({
  dispatch: () => {},
  routerTabs: [],
  isLogin: false,
});
export default BaseContext;
