import { createContext, FC, useContext, useReducer } from 'react';
// 组件
import { Radio } from 'antd';

interface IFooProps {}
const Foo: FC<IFooProps> = () => {
  const { value, dispatch } = useContext(globalContext);
  return (
    <div>
      <h1> 组件1 共享全局值 : {value}</h1>
      <div>
        <Radio.Group>
          <Radio.Button
            value="add"
            onClick={() => {
              dispatch?.({ type: 'add', value: 1 });
            }}
          >
            加
          </Radio.Button>
          <Radio.Button
            value="sub"
            onClick={() => {
              dispatch?.({ type: 'sub', value: 1 });
            }}
          >
            减
          </Radio.Button>
          <Radio.Button
            value="inv"
            onClick={() => {
              dispatch?.({ type: 'inv', value: 1 });
            }}
          >
            乘方
          </Radio.Button>
          <Radio.Button
            value="empty"
            onClick={() => {
              dispatch?.({ type: 'empty' });
            }}
          >
            清零
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};
const Foo2: FC<IFooProps> = () => {
  const { value } = useContext(globalContext);
  return <h1 style={{ marginTop: '20px' }}>组件2 共享全局值: {value}</h1>;
};
type actionType = 'add' | 'sub' | 'inv' | 'empty'; //加|减|乘方|清空
enum actionTypeEnum {
  ADD = 'add',
  SUB = 'sub',
  INV = 'inv',
  EMPTY = 'empty',
}

const useGlobal = () => {
  const reducers = (
    state: any,
    action: { type: actionType; value?: number },
  ) => {
    switch (action.type) {
      case actionTypeEnum.ADD:
        return {
          ...state,
          number: state.number + action.value,
        };
      case actionTypeEnum.SUB:
        return {
          ...state,
          number: state.number - (action.value ?? 0),
        };
      case actionTypeEnum.INV:
        return {
          ...state,
          number: Math.pow(state.number, 2),
        };
      case actionTypeEnum.EMPTY:
        return {
          ...state,
          number: 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducers, { number: 0 });
  const { number } = state;
  return { number, dispatch };
};

interface IglobalContext {
  value: any;
  dispatch?: (action: { type: actionType; value?: number }) => void;
}
const globalContext = createContext<IglobalContext>({ value: 0 });

export default () => {
  const { number, dispatch } = useGlobal();
  return (
    <globalContext.Provider value={{ value: number, dispatch }}>
      <Foo />
      <Foo2 />
    </globalContext.Provider>
  );
};
