/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-03-20 17:26:39
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-27 22:23:42
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
const BASE_CONTENT = '只要在路上就没有到不了的远方!';
export const projectConfig: IProjectConfigProps[] = [
  {
    key: 'JavaScript',
    icon: <MyIcon type="icon-js" />,
    title: 'JavaScript',
    content: BASE_CONTENT,
    link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'TypeScript',
    icon: <MyIcon type="icon-typescript" />,
    title: 'TypeScript',
    content: 'TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript',
    link: 'https://www.tslang.cn/',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'ReactJs',
    icon: <MyIcon type="icon-react" />,
    title: 'React',
    content: '用于构建 Web 和原生交互界面的库',
    link: 'https://react.docschina.org/',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'VueJs',
    icon: <MyIcon type="icon-Vue" />,
    title: 'Vue',
    content: '渐进式 JavaScript 框架',
    link: 'https://v3.cn.vuejs.org/',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'NodeJs',
    icon: <MyIcon type="icon-node_js" />,
    title: 'NodeJs',
    content: '开源、跨平台的 JavaScript 运行时环境',
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
