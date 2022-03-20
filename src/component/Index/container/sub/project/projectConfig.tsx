import { Key, ReactNode } from 'react';
// 组件
import MyIcon from '@/component/myIcon';

export interface IProjectConfigProps {
  key: Key;
  icon: ReactNode;
  title: ReactNode;
  content: string;
  description: string;
  date: string;
}
export const projectConfig: IProjectConfigProps[] = [
  {
    key: 'JavaScript',
    icon: <MyIcon type="icon-js" />,
    title: 'JavaScript',
    content: '今天的只需要比昨天的你更好',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'TypeScript',
    icon: <MyIcon type="icon-typescript" />,
    title: 'TypeScript',
    content: '今天的只需要比昨天的你更好',
    description: '语言',
    date: '2022-03-20',
  },
  {
    key: 'ReactJs',
    icon: <MyIcon type="icon-react" />,
    title: 'React',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'VueJs',
    icon: <MyIcon type="icon-tubiao" />,
    title: 'Vue',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'NodeJs',
    icon: <MyIcon type="icon-node_js" />,
    title: 'NodeJs',
    content: '今天的只需要比昨天的你更好',
    description: '运行环境',
    date: '2022-03-20',
  },
  {
    key: 'WindiCss',
    icon: <MyIcon type="icon-windicss" />,
    title: 'WindiCss',
    content: '遵循原子CSS命名规则',
    description: 'CSS框架',
    date: '2022-03-20',
  },
];
