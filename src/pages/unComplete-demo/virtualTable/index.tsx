import { useRef, useState } from 'react';
import { Table } from 'antd';

import { VariableSizeGrid as Grid } from 'react-window';
import classNames from 'classnames';
import './style.less';
const columns = [
  {
    title: 'A',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'B',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'C',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'D',
    dataIndex: 'key',
    width: 150,
  },
  {
    title: 'E',
    dataIndex: 'key',
    width: 200,
  },
  {
    title: 'F',
    dataIndex: 'key',
    width: 100,
  },
];
const data = Array.from(
  {
    length: 100000,
  },
  (_, key) => ({
    key,
  }),
);
const VirtualTable = (props: any) => {
  const gridRef = useRef<any>();
  const [connectObject] = useState(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            //@ts-ignore
            scrollLeft,
          });
        }
      },
    });
    return obj;
  });
  const renderVirtualList = (
    rawData: any,
    { scrollbarSize, ref, onScroll }: any,
  ) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={columns.length}
        columnWidth={(index) => {
          const { width } = columns[index];
          // @ts-ignore
          return totalHeight > scroll.y && index === columns.length - 1
            ? width - scrollbarSize - 1
            : width;
        }}
        // @ts-ignore
        height={scroll.y}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={500}
        onScroll={({ scrollLeft }) => {
          onScroll({
            scrollLeft,
          });
        }}
      >
        {({ columnIndex, rowIndex, style }) => (
          <div
            className={classNames('virtual-table-cell', {
              'virtual-table-cell-last': columnIndex === columns.length - 1,
            })}
            style={style}
          >
            {rawData[rowIndex][columns[columnIndex].dataIndex]}
          </div>
        )}
      </Grid>
    );
  };
  return (
    <Table
      {...props}
      className="virtual-table"
      dataSource={data}
      columns={[]}
      pagination={false}
      components={{
        body: renderVirtualList,
      }}
    />
  );
};
export default VirtualTable;
