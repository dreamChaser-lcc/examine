import { FC } from 'react';

/**
 * 函数组件参数props的格式规范接口
 */
interface Iprops1 {
  first: number;
}
interface Iprops2 {
  second: string;
}
interface Iprops3 {
  third: string;
}
const style = {
  margin: '20px',
  padding: '10px',
  height: '50px',
  width: '300px',
  background: '#fff',
};

/**
 * 函数组件
 */
const F1: FC<Iprops1> = (props) => {
  return (
    <>
      <div style={style}>函数组件F1</div>
    </>
  );
};
const F2: FC<Iprops2> = (props) => {
  console.log(props);
  return (
    <>
      <div style={style}>函数组件F2</div>
    </>
  );
};
const F3: FC<Iprops3> = (props) => {
  console.log(props);
  return (
    <>
      <div style={style}> 函数组件F3 </div>
    </>
  );
};

/**
 * 合并抛出的type变量
 */
type Is = FC<Iprops1> & {
  second: FC<Iprops2>;
  third: FC<Iprops3>;
};
const transF = F1 as Is;
transF.second = F2;
transF.third = F3;

export default transF;
