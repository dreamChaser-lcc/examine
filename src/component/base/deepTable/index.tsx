import React, {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
// 组件
import { Button, Dropdown, Menu, Space, Table, TableProps } from 'antd';
import SearchForm from './searchForm';
import MyIcon from '@/component/myIcon';
import { PlusOutlined } from '@ant-design/icons';
// 方法
import { useColumns } from './hook/useColumns';
// 常量
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { getBoundTop } from './utils';
import { useResize } from '@/hooks/useResize';

const dataSource: any[] = new Array(20).fill(1).map((item, index) => {
  return {
    // key: '1',
    name: `${index}`,
    age: 32,
    address: `仓山区万达1${index}号`,
  };
});

const columns: columnsProps[] = [
  {
    title: '排序',
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
    width: 150,
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
  const tableDomRef = useRef<HTMLDivElement>(null);
  const [tableHight, setTableHight] = useState<number>();
  /**计算表格高度 */
  const autoHight = () => {
    if (tableDomRef?.current) {
      const container = document.querySelector('body') as HTMLBodyElement;
      setTimeout(() => {
        const top = getBoundTop(tableDomRef?.current);
        const height = container?.clientHeight - top - 120;
        console.log(height, top);
        setTableHight(height || 500);
      }, 100);
    }
  };
  useResize(autoHight);
  useEffect(() => {
    autoHight();
  }, [tableDomRef?.current]);

  const { columns: newColumns, total, newDataSource } = useColumns({
    dataSource,
    columns,
  });

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
          {/* <Button>Clear filters</Button>
          <Button>Clear filters and sorters</Button> */}
        </Space>
        <Table
          dataSource={dataSource}
          bordered
          rowKey="name"
          ref={tableDomRef}
          columns={columns}
          pagination={{
            size: 'small',
            pageSizeOptions: [5, 10, 20, 50],
            total,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
          scroll={{ y: tableHight }}
        />
      </div>
    </div>
  );
};
export default DeepTable;
