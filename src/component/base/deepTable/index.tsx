import React, { FC, ReactNode } from 'react';
import { Button, Dropdown, Menu, Space, Table, TableProps } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { PlusOutlined } from '@ant-design/icons';
import { useColumns } from './hook/useColumns';
import SearchForm from './searchForm';
import MyIcon from '@/component/myIcon';

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
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      width: 100,
      render: () => {
        const size = 'middle';
        const menu = (
          <Menu onClick={() => 'handleMenuClick'}>
            <Menu.Item
              key="edit"
              icon={<MyIcon size="middle" type="icon-bianji" />}
            >
              编辑
            </Menu.Item>
            <Menu.Item
              key="delete"
              style={{ color: 'red' }}
              icon={<MyIcon size="middle" type="icon-shanchu" />}
            >
              删除
            </Menu.Item>
          </Menu>
        );

        return (
          <>
            <Dropdown.Button overlay={menu} key="detail">
              <MyIcon size="middle" type="icon-chakan" />
              查看
            </Dropdown.Button>
          </>
        );
      },
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
      <div
        style={{
          marginTop: 10,
          paddingTop: 10,
          borderTop: '1px solid rgb(220, 221, 225)',
        }}
      >
        <Space style={{ marginBottom: 16 }}>
          <Button type="primary" icon={<PlusOutlined />}>
            新增
          </Button>
          <Button>Clear filters</Button>
          <Button>Clear filters and sorters</Button>
        </Space>
        <Table
          dataSource={newDataSource}
          bordered
          columns={columns}
          pagination={{
            size: 'small',
            pageSizeOptions: [5, 10, 20, 50],
            total: 500,
          }}
        />
      </div>
    </div>
  );
};
export default DeepTable;
