import Detail from '@/component/base/detail';
import { Alert, Button } from 'antd';
import { Key, useRef } from 'react';
import Table from '../table';
import { formItems } from './detailConfig';

export default () => {
  const actionRef = useRef<any>();
  const handleDelete = (record: any) => {
    
  };
  const handleOperationClick = (key: Key, record: any, index: number) => {
    if (key === 'detail') {
      return actionRef.current.detail(record);
    }
    if (key === 'edit') {
      return actionRef.current.edit(record);
    }
    if (key === 'delete') {
      return handleDelete(record);
    }
  };
  return (
    <>
      <Alert
        message="点击操作 查看详情页"
        // description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <Table onOperationClick={handleOperationClick} />
      <Detail bindId="tableId" actionRef={actionRef} formItems={formItems} />
    </>
  );
};
