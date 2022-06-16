import Detail from '@/component/base/detail';
import { Button } from 'antd';
import { useRef } from 'react';
import Table from '../table';

export default () => {
  const actionRef = useRef<any>();
  const visible = useRef<boolean>(false);
  const handleClick = () => {
    if (!visible.current) {
      actionRef.current.show();
      visible.current = true;
    } else {
      actionRef.current.hide();
      visible.current = false;
    }
  };
  return (
    <>
      <Button onClick={handleClick}>show/hide</Button>
      <Table />
      <Detail bindId="tableId" actionRef={actionRef} />
    </>
  );
};
