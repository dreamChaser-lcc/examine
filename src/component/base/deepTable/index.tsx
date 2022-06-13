import { FC, Key, ReactNode, useEffect, useRef, useState } from 'react';
// 组件
import { Table, TableProps } from 'antd';
import SearchForm from '../deepForm/searchForm';
import HeadToolBar from './headToolBar';
// 方法
import { useResize } from '@/hooks/useResize';
import { useColumns } from './hook/useColumns';
import { getBoundTop } from './utils';
// 常量
import { ColumnType } from 'antd/lib/table';
import { DEEP_TABLE_CLASS_NAME } from '@/constants/common';
import { ProFormItemProps } from '../deepForm/searchForm/interface';
import DeepForm from '../deepForm';

type AntColumnsType<RecordType> = ColumnType<RecordType>;
export interface columnsProps extends AntColumnsType<any> {
  /* 标题 */
  title: ReactNode | (({ sortOrder, sortColumn, filters }: any) => ReactNode);
  dataIndex: string;
}
export interface IDeepTableProps extends TableProps<any> {
  /**查询配置 */
  formItems?: ProFormItemProps[];
  /**列配置 */
  columns: columnsProps[];
  /**可固定高度,否则自适应 */
  defaultHight?: number | string;
  /**操作按钮回调 */
  onOperationClick?: (key: Key, record: any, index: number) => void;
}
const DeepTable: FC<IDeepTableProps> = (props) => {
  const {
    defaultHight,
    rowKey,
    onOperationClick,
    formItems,
    columns,
    dataSource,
    ...resProps
  } = props;
  const [tableHight, setTableHight] = useState<number | string>();
  const [loading, setLoading] = useState<boolean>();

  const tableDomRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<any>();
  const deepTableRef = useRef<HTMLDivElement>(null);

  /**计算表格高度 */
  const autoHight = () => {
    if (tableDomRef?.current) {
      const container = document.querySelector('body') as HTMLBodyElement;
      setTimeout(() => {
        const top = getBoundTop(tableDomRef?.current);
        const height = container?.clientHeight - top - 120;
        setTableHight(height || 500);
      }, 100);
    }
  };
  useResize(autoHight);
  useEffect(() => {
    !defaultHight || autoHight();
  }, [tableDomRef?.current]);

  const { newColumns, total } = useColumns({
    columns,
    dataSource,
    onOperationClick,
  });
  /**查询回调 */
  const onSearch = (fieldsValue: any) => {
    console.log(fieldsValue);
  };
  /**刷新 */
  const tableReload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div
      ref={deepTableRef}
      className={DEEP_TABLE_CLASS_NAME}
      style={{
        height: '100%',
        background: '#fff',
        padding: 10,
        border: '1px solid #dcdde1',
        borderRadius: 5,
      }}
    >
      <DeepForm.SearchForm
        actionRef={searchRef}
        formItems={formItems}
        onSearch={onSearch}
      />
      <HeadToolBar
        condition={{
          deepTableRef,
          tableReload: tableReload,
        }}
      />
      <Table
        dataSource={dataSource}
        bordered
        rowKey={rowKey}
        {...resProps}
        loading={loading}
        ref={tableDomRef}
        pagination={{
          size: 'small',
          pageSizeOptions: [5, 10, 20, 50],
          total,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        scroll={{ y: defaultHight || tableHight }}
        columns={newColumns}
      />
    </div>
  );
};
export default DeepTable;
