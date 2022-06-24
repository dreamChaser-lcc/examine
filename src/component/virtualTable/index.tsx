import { Table } from 'antd';
import classNames from 'classnames';
import ResizeObserver from 'rc-resize-observer';
import React, { FC, useEffect, useRef, useState } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';

// Usage
const columns = [
  { title: 'A', dataIndex: 'key', width: 150 },
  { title: 'B', dataIndex: 'key' },
  { title: 'C', dataIndex: 'key' },
  { title: 'D', dataIndex: 'key' },
  { title: 'E', dataIndex: 'key', width: 200 },
  { title: 'F', dataIndex: 'key', width: 100 },
];

interface RenderCell {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}
const VirtualTable: FC<Parameters<typeof Table>[0]> = (props) => {
  const { scroll } = props;
  /**表格内容区宽度 */
  const [tableWidth, setTableWidth] = useState<number>(0);

  const gridRef = useRef<any>();
  // 属性左滚动触发事件回调
  const [connectObject] = useState<any>(() => {
    const obj = {};
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => null,
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft });
        }
      },
    });
    return obj;
  });
  const widthColumnCount = columns!.filter(({ width }) => !width).length;
  /**未预设宽度的column平摊宽度*/
  const mergedColumns = columns!.map((column) => {
    if (column.width) {
      return column;
    }
    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  });
  /**宽度改变重置起始点 */
  const resetVirtualGrid = () => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true,
    });
  };

  useEffect(() => resetVirtualGrid, [tableWidth]);

  /**自定义渲染body */
  const renderVirtualList = (
    rawData: any,
    { scrollbarSize, ref, onScroll }: any,
  ) => {
    ref.current = connectObject;
    const totalHeight = rawData.length * 54;
    /**列宽度 */
    const columnWidth = (index: number) => {
      const { width } = mergedColumns[index];
      // @ts-ignore
      return totalHeight > scroll!.y && index === mergedColumns.length - 1
        ? (width as number) - scrollbarSize - 1
        : (width as number);
    };
    /**渲染单元格内容 */
    const renderCell = (props: RenderCell) => {
      const { columnIndex, rowIndex, style } = props;
      const rowData = rawData[rowIndex];
      const cellDataIndex = (mergedColumns as any)[columnIndex].dataIndex;
      const renderContent = rowData[cellDataIndex];
      return (
        <div
          className={classNames('virtual-table-cell', {
            'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
          })}
          style={style}
        >
          {renderContent}
        </div>
      );
    };
    return (
      <Grid
        ref={gridRef}
        className="virtual-grid"
        columnCount={mergedColumns.length}
        columnWidth={columnWidth}
        height={scroll!.y as number}
        rowCount={rawData.length}
        rowHeight={() => 54}
        width={tableWidth}
        onScroll={({ scrollLeft }: { scrollLeft: number }) => {
          onScroll({ scrollLeft });
        }}
      >
        {renderCell}
      </Grid>
    );
  };

  return (
    <ResizeObserver
      onResize={({ width }) => {
        setTableWidth(width);
      }}
    >
      <Table
        {...props}
        className="virtual-table"
        columns={mergedColumns}
        pagination={false}
        components={{
          body: renderVirtualList,
        }}
      />
    </ResizeObserver>
  );
};
VirtualTable.defaultProps = {
  scroll: { y: 300, x: '100vw' },
  dataSource: Array.from({ length: 100000 }, (_, key) => ({ key })),
};
export default VirtualTable;
