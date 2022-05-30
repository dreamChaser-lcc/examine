import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { columnsProps, IDeepTableProps } from '..';

const handleColumns = (state: any[], action: any) => {
  switch (action) {
    case 'init':
      // const temp = state.map((val, key) => {
      //   val['key'] = key;
      //   return val;
      // });
      return [...state];
    default:
      return [...state];
  }
};

export function useColumns(props: any) {
  const { columns, dataSource } = props;
  const [newDataSource, dispatchColumns] = useReducer(handleColumns, [
    ...(columns as []),
  ]);

  const total = useMemo(() => {
    return dataSource?.length ?? 0;
  }, [dataSource]);
  
  useEffect(() => {
    dispatchColumns('init');
  }, []);

  // console.log(total)

  return { columns, newDataSource, total};
}
