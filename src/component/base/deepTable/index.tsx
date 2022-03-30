import React, { FC, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { useColumns } from './hook/useColumns';
import SearchForm from './searchForm';

type AntColumnsType<RecordType> = ColumnType<RecordType>;
export interface columnsProps extends AntColumnsType<any> {
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
    {
      title: 'Action',
      dataIndex: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  const { columns: newColumns, newDataSource } = useColumns({ dataSource });
  console.log(newDataSource);
  return (
    <div
      style={{
        height: '100%',
        background: '#fff',
        padding: 10,
        border: '1px solid #dcdde1',
        borderRadius: 5,
      }}
    >
      <>
        <SearchForm />
      </>
      <Table
        dataSource={newDataSource}
        columns={columns}
        pagination={{
          size: 'small',
          pageSizeOptions: [5, 10, 20, 50],
          total: 500,
        }}
      />
    </div>
  );
};
export default DeepTable;
