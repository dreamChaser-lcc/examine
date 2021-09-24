import React, { useState, useEffect, useReducer } from 'react';
import { columnsProps, IDeepTableProps } from '..';

const handleColumns = (state: any[], action: any) => {
  switch (action) {
    case 'init':
      const temp = state.map((val, key) => {
        val['key'] = key;
        return val;
      });
      return [...temp];
    default:
      return [...state];
  }
};

export function useColumns(props: any) {
  const { columns, dataSource } = props;
  const [newDataSource, dispatchColumns] = useReducer(handleColumns, [
    ...(dataSource as []),
  ]);
  useEffect(() => {
    dispatchColumns('init');
  }, []);
  return { columns, newDataSource };
}
