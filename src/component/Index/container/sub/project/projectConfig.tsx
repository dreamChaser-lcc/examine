import { Key, ReactNode } from 'react';
// 组件
import { PlayCircleOutlined } from '@ant-design/icons';

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
    icon: <PlayCircleOutlined />,
    title: 'JavaScript',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'TypeScript',
    icon: <PlayCircleOutlined />,
    title: 'TypeScript',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'ReactJs',
    icon: <PlayCircleOutlined />,
    title: 'React',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'VueJs',
    icon: <PlayCircleOutlined />,
    title: 'Vue',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'NodeJs',
    icon: <PlayCircleOutlined />,
    title: 'NodeJs',
    content: '今天的只需要比昨天的你更好',
    description: '框架',
    date: '2022-03-20',
  },
  {
    key: 'WindiCss',
    icon: <PlayCircleOutlined />,
    title: 'WindiCss',
    content: '遵循原子CSS命名规则',
    description: 'CSS框架',
    date: '2022-03-20',
  },
];
