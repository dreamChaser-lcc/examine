import { Alert, Card, Table } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useRouteMatch, useLocation, useHistory } from 'umi';
import { handleTimer } from './hooks';

export default () => {
  const dataSource = [
    { sortNumber: 1, name: 'l', gender: '1' },
    { sortNumber: 2, name: 'c', gender: '0' },
    { sortNumber: 3, name: 'c', gender: '0' },
    { sortNumber: 11, name: 'l1', gender: '11' },
    { sortNumber: 21, name: 'c1', gender: '01' },
    { sortNumber: 31, name: 'c1', gender: '01' },
    { sortNumber: 12, name: 'l2', gender: '12' },
    { sortNumber: 22, name: 'c2', gender: '02' },
    { sortNumber: 32, name: 'c2', gender: '02' },
    { sortNumber: 311, name: 'l1', gender: '11' },
    { sortNumber: 321, name: 'c1', gender: '01' },
    { sortNumber: 331, name: 'c1', gender: '01' },
    { sortNumber: 312, name: 'l2', gender: '12' },
    { sortNumber: 322, name: 'c2', gender: '02' },
    { sortNumber: 332, name: 'c2', gender: '02' },

    { sortNumber: 41, name: 'l', gender: '1' },
    { sortNumber: 42, name: 'c', gender: '0' },
    { sortNumber: 43, name: 'c', gender: '0' },
    { sortNumber: 411, name: 'l1', gender: '11' },
    { sortNumber: 421, name: 'c1', gender: '01' },
    { sortNumber: 431, name: 'c1', gender: '01' },
    { sortNumber: 412, name: 'l2', gender: '12' },
    { sortNumber: 422, name: 'c2', gender: '02' },
    { sortNumber: 432, name: 'c2', gender: '02' },
    { sortNumber: 4311, name: 'l1', gender: '11' },
    { sortNumber: 4321, name: 'c1', gender: '01' },
    { sortNumber: 4331, name: 'c1', gender: '01' },
    { sortNumber: 4312, name: 'l2', gender: '12' },
    { sortNumber: 4322, name: 'c2', gender: '02' },
    { sortNumber: 4332, name: 'c2', gender: '02' },
  ];
  const history = useHistory<string>();
  const config = {
    rownum: 10,
    playSpeed: 50,
  };
  const scrollAnimation = async () => {
    const tableBodyEle = document.querySelector(
      '#tableId .ant-table-body',
    ) as HTMLElement;
    if (history.location.pathname !== '/echarts-explore/scrollTable') {
      clearTimer();
    } else {
      // 无限自动轮播，不能兼容scroll-behavior: smooth;
      if (
        tableBodyEle!.scrollTop <
        tableBodyEle!.scrollHeight - tableBodyEle?.clientHeight
      ) {
        tableBodyEle!.scrollTop += 1;
      } else {
        tableBodyEle!.scrollTop = 0;
      }
    }
  };
  const { setTimer, clearTimer } = handleTimer(
    scrollAnimation,
    config.playSpeed,
  );
  useEffect(() => {
    setTimer();
    return () => {
      clearTimer();
    };
  });

  return (
    <>
      <Alert
        message="数据大屏滚动表格动画"
        description="原理：body中的scrollTop不断增加，形成向下移动动画,鼠标hover之后停止动画"
        type="info"
        style={{margin:20}}
        showIcon
      />
      <Card
        size="small"
        title="数据大屏的滚动表格"
        style={{ width: 600, margin: '10px 20px' }}
      >
        <div
          id="tableId"
          onMouseEnter={(event) => {
            clearTimer();
          }}
          onMouseLeave={(event) => {
            setTimer();
          }}
        >
          <Table
            columns={[
              { title: '排序', dataIndex: 'sortNumber' },
              { title: 'name', dataIndex: 'name' },
              { title: 'gender', dataIndex: 'gender' },
            ]}
            scroll={{
              y: '200px',
            }}
            onRow={(record) => {
              return {};
            }}
            pagination={false}
            rowKey="sortNumber"
            dataSource={dataSource}
          ></Table>
        </div>
      </Card>
    </>
  );
};
