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
import HeadToolBar from './headToolBar';
// 方法
import { useResize } from '@/hooks/useResize';
import { useColumns } from './hook/useColumns';
// 常量
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { getBoundTop } from './utils';
import { DEEPTABLECLASSNAME } from '@/constants/common';

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
  /**可固定高度,否则自适应 */
  defaultHight?: number | string;
  operationConfig?: {
    render: (value: any, record: any, index: number) => void;
  };
}
const DeepTable: FC<IDeepTableProps> = (props) => {
  const { defaultHight, ...resProps } = props;
  const [tableHight, setTableHight] = useState<number | string>();

  const tableDomRef = useRef<HTMLDivElement>(null);
  const deepTableRef = useRef<HTMLDivElement>(null);

  /**计算表格高度 */
  const autoHight = () => {
    if (tableDomRef?.current) {
      const container = document.querySelector('body') as HTMLBodyElement;
      setTimeout(() => {
        const top = getBoundTop(tableDomRef?.current);
        const height = container?.clientHeight - top - 120;
        // console.log(height, top);
        setTableHight(height || 500);
      }, 100);
    }
  };
  useResize(autoHight);
  useEffect(() => {
    !defaultHight || autoHight();
  }, [tableDomRef?.current]);
  const onOperationClick = (key: any, record: any, i: any) => {
    console.log(key, record, i);
  };

  const { newColumns, total } = useColumns({
    columns,
    onOperationClick,
  });

  return (
    <div
      ref={deepTableRef}
      className={DEEPTABLECLASSNAME}
      style={{
        height: '100%',
        background: '#fff',
        padding: 10,
        border: '1px solid #dcdde1',
        borderRadius: 5,
      }}
    >
      <SearchForm />
      <HeadToolBar condition={{ deepTableRef, tableReload: () => {} }} />
      <Table
        dataSource={dataSource}
        bordered
        rowKey="name"
        ref={tableDomRef}
        columns={newColumns}
        pagination={{
          size: 'small',
          pageSizeOptions: [5, 10, 20, 50],
          total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        scroll={{ y: defaultHight || tableHight }}
      />
    </div>
  );
};
export default DeepTable;
