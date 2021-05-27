import React,{useState,useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import './index.less'
import 'antd/dist/antd.css';

function useSetInterval(callback:()=>void,time:number){
  useEffect(() => {
    const i = setInterval(callback,time)
    return () => {
      clearInterval(i);
    }
  }, [])
}
export default function IndexPage() {
  return (
    <>
     antd learnDemo
    </>
  );
}
