/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-03-20 17:26:39
 * @LastEditors: dreamChaser-lcc
 * @LastEditTime: 2022-07-31 22:41:40
 * @Description: 前端项目九宫格
 */
import { Key, ReactNode } from 'react';
// 组件
import MyIcon from '@/component/myIcon';

export interface IProjectConfigProps {
  key: Key;
  icon: ReactNode;
  title: ReactNode;
  content: string;
  link: string;
  description: string;
  date: string;
}
const BASE_CONTENT = '今天的你只需要比昨天的你更好';
export const projectConfig: IProjectConfigProps[] = [
  {
    key: 'JavaScript',
    icon: <MyIcon type="icon-js" />,
    title: 'JavaScript',
    content: BASE_CONTENT,
    link: 'https://www.javascriptcn.com/',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'TypeScript',
    icon: <MyIcon type="icon-typescript" />,
    title: 'TypeScript',
    content: BASE_CONTENT,
    link: 'https://www.tslang.cn/',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'ReactJs',
    icon: <MyIcon type="icon-react" />,
    title: 'React',
    content: BASE_CONTENT,
    link: 'https://react.docschina.org/',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'VueJs',
    icon: <MyIcon type="icon-Vue" />,
    title: 'Vue',
    content: BASE_CONTENT,
    link: 'https://v3.cn.vuejs.org/',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'NodeJs',
    icon: <MyIcon type="icon-node_js" />,
    title: 'NodeJs',
    content: BASE_CONTENT,
    link: 'https://nodejs.org/zh-cn/docs/',
    description: '运行环境',
    date: '2022-03-20',
  },
  {
    key: 'WindiCss',
    icon: <MyIcon type="icon-windicss" />,
    title: 'WindiCss',
    content: '遵循原子CSS命名规则',
    link: 'https://windicss.org/',
    description: 'CSS框架',
    date: '2022-03-20',
  },
];
