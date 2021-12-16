import { useEffect, useRef, useState } from 'react';
import HtmlTable from './htmlTable';
import './style.less';
const dataSource = [
  { sortNumber: 1, name: 'l', gender: '1' },
  { sortNumber: 2, name: 'c', gender: '0' },
  { sortNumber: 3, name: 'c', gender: '0' },
  { sortNumber: 11, name: 'l1', gender: '11' },
  { sortNumber: 21, name: 'c1', gender: '01' },
  { sortNumber: 31, name: 'c1', gender: '01' },
  { sortNumber: 12, name: 'l2', gender: '12' },
  { sortNumber: 22, name: 'c2', gender: '02' },
  { sortNumber: 32, name: 'c2', gender: '02' },
  { sortNumber: 311, name: 'l1', gender: '11' },
  { sortNumber: 321, name: 'c1', gender: '01' },
  { sortNumber: 331, name: 'c1', gender: '01' },
  { sortNumber: 312, name: 'l2', gender: '12' },
  { sortNumber: 322, name: 'c2', gender: '02' },
  { sortNumber: 332, name: 'c2', gender: '02' },

  { sortNumber: 41, name: 'l', gender: '1' },
  { sortNumber: 42, name: 'c', gender: '0' },
  { sortNumber: 43, name: 'c', gender: '0' },
  { sortNumber: 411, name: 'l1', gender: '11' },
  { sortNumber: 421, name: 'c1', gender: '01' },
  { sortNumber: 431, name: 'c1', gender: '01' },
  { sortNumber: 412, name: 'l2', gender: '12' },
  { sortNumber: 422, name: 'c2', gender: '02' },
  { sortNumber: 432, name: 'c2', gender: '02' },
  { sortNumber: 4311, name: 'l1', gender: '11' },
  { sortNumber: 4321, name: 'c1', gender: '01' },
  { sortNumber: 4331, name: 'c1', gender: '01' },
  { sortNumber: 4312, name: 'l2', gender: '12' },
  { sortNumber: 4322, name: 'c2', gender: '02' },
  { sortNumber: 4332, name: 'c2', gender: '02' },
];
const columns = [
  {
    title: 'sortNumber',
    dataIndex: 'sortNumber',
  },
  {
    title: 'name',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
];
export default () => {
  const animationConfig = {
    time: 5 * 1000,
    curIndex: 0,
    size: 10,
    length: dataSource.length,
  };
  const [data, setData] = useState<any>([]);
  const configRef = useRef(animationConfig);
  useEffect(() => {
    setTimeout(() => {
      const data = dataSource.slice(
        (configRef.current.length-configRef.current.curIndex) % configRef.current.length,
        ((configRef.current.length-configRef.current.curIndex) % configRef.current.length) +
          configRef.current.size,
      );
      setData(data);
      configRef.current.curIndex++;
    }, configRef.current.time);
    return () => {};
  }, [data]);
  const scrollTobottom = (func: () => void, timer: number) => {};
  return (
    <div id="animate-fadeInRight">
      <div className="div1 animated-fadeInRight"></div>
      <HtmlTable dataSource={data} rowkey="sortNumber" columns={columns} />
    </div>
  );
};
