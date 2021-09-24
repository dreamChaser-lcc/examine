import { createContext } from 'react';
import { actionType } from '@/layouts/hook';


export interface IContextProps  {
  routerTabs: any[];
}
interface Ifunc extends IContextProps {
  // 修改
  dispatch: (action: actionType, payload: any) => void;
}
// 创建Context
export default createContext<Ifunc>({
  dispatch: () => {},
  routerTabs: [], 
});
