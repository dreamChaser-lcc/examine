import React, { FC, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useColumns } from './hook/useColumns';

export interface columnsProps {
  /* 标题 */
  title: ReactNode | (({ sortOrder, sortColumn, filters }: any) => ReactNode);
  dataIndex: string;
  dataSource?: any[];
  rowKey?: string;
}
export interface IDeepTableProps extends TableProps<any> {
  columns: columnsProps[];
}
const DeepTable: FC<IDeepTableProps> = (props) => {
  const { ...resProps } = props;

  const dataSource: any[] = [
    {
      // key: '1',
      name: '1',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      // key: '2',
      name: '2',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns: columnsProps[] = [
    {
      title: <>123</>,
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
  ];
  const { columns: newColumns, newDataSource } = useColumns({ dataSource });
  console.log(newDataSource);
  return (
    <>
      <Table dataSource={newDataSource} columns={columns} />
    </>
  );
};
export default DeepTable;
