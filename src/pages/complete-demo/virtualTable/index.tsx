/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-07-31 22:48:43
 * @LastEditors: dreamChaser-lcc
 * @LastEditTime: 2022-07-31 22:52:22
 * @Description: 虚拟表格组件
 */

import VirtualTable from '@/component/virtualTable';
import { Alert } from 'antd';

export default () => {
  return (
    <>
      <Alert message="虚拟表格组件" type="info" showIcon />
      <VirtualTable />
    </>
  );
};
