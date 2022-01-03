import { IContextProps } from '@/globalContext';
import { useReducer } from 'react';
import { history } from 'umi';
export type actionType =
  | 'addRouterTabs'
  | 'deleteRouterTabs'
  | 'changeLoginState';
export interface payloadProps {
  name: string;
  pathName: string;
  query: any;
}
interface IGlobalprops {
  type: actionType;
  payload: any;
}
function globalReducer(
  state: IContextProps,
  action: IGlobalprops,
): IContextProps {
  switch (action.type) {
    case 'addRouterTabs': {
      const temp = state.routerTabs;
      const routerTabs = [...temp, action.payload];
      return { ...state, routerTabs };
    }
    case 'deleteRouterTabs': {
      const { pathName } = action.payload;
      const routerTabs = state.routerTabs?.filter(
        (item) => item.pathName !== pathName,
      );
      const item = routerTabs.slice(-1)[0];
      history.push({ pathname: item.pathName, query: item.query });
      return { ...state, routerTabs };
    }
    case 'changeLoginState': {
      return { ...state, isLogin: action.payload };
    }
    default:
      return { ...state };
  }
}

export const useGlobal = () => {
  const initvalue: payloadProps[] = [
    { name: '首页', pathName: '/', query: {} },
  ];
  const [state, globalDispatch] = useReducer(globalReducer, {
    routerTabs: initvalue,
    isLogin: false,
  });
  const dispatch = (action: actionType, payload: any) => {
    globalDispatch({ type: action, payload });
  };
  return {
    ...state,
    dispatch,
  };
};
