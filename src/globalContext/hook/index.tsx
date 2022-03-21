import { notClearTabs } from '@/contants/common';
import { IContextProps } from '@/globalContext';
import { useReducer } from 'react';
import { history } from 'umi';

/**下拉菜单 */
type dropMenusType = 'closeToLeft' | 'closeToRight' | 'closeOther';
/**其他 */
type otherType = 'addRouterTabs' | 'deleteRouterTabs' | 'changeLoginState';

export type actionType = otherType | dropMenusType;
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
  const copyState = JSON.parse(JSON.stringify(state)) as IContextProps;
  switch (action.type) {
    case 'addRouterTabs': {
      const temp = copyState.routerTabs;
      const routerTabs = [...temp, action.payload];
      return { ...copyState, routerTabs };
    }
    case 'deleteRouterTabs': {
      const { pathName } = action.payload;
      const routerTabs = copyState.routerTabs?.filter(
        (item) => item.pathName !== pathName,
      );
      const item = routerTabs.slice(-1)[0];
      history.push({ pathname: item.pathName, query: item.query });
      return { ...copyState, routerTabs };
    }
    case 'closeToLeft': {
      const { pathName } = action.payload;
      const routerTabs = copyState.routerTabs;
      const index = routerTabs?.findIndex((item) => {
        return item?.pathName === pathName;
      });
      if (index !== -1) {
        routerTabs.splice(1, index - 1);
      }
      return { ...copyState, routerTabs };
    }
    case 'closeToRight': {
      const { pathName } = action.payload;
      const temp = copyState.routerTabs;
      const index = temp?.findIndex((item) => {
        return item?.pathName === pathName;
      });
      if (index !== -1) {
        const routerTabs = temp.slice(0, index + 1);
        return { ...copyState, routerTabs };
      }
      return state;
    }
    case 'closeOther': {
      const { pathName } = action.payload;
      const routerTabs = copyState.routerTabs?.filter((item) => {
        return [pathName, ...notClearTabs].includes(item?.pathName);
      });
      return { ...copyState, routerTabs };
    }
    case 'changeLoginState': {
      return { ...copyState, isLogin: action.payload };
    }
    default:
      return { ...copyState };
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
