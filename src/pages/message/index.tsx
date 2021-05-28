import React, { FC, useEffect, useState } from 'react'

import { Breadcrumb, Divider, Space, Tabs } from 'antd'
import CustomTable from '@/component/customTable/CustomTable';
import './style.less'
import { columns } from './tableConfig';
import { GET, POST } from '@/axios';
import { apiUrl } from '@/enum/apiUrl';

interface TabsProps{
    content:string,
    num?:number
}

const Tab:FC<TabsProps>=(props)=>{
    const {content,num}=  props;
    return (<>
            <Space size="large">
               <div>{content}</div>
               <div> {num} </div>
            </Space>
       </>)
}
type Tmenu = {
    content:string,
    num?:number,
    key:string,
}

export default (props:any)=>{
    const key = props.location?.query?.key;
    const [selectedRowKeys,setSelectedRowKeys] = useState();
    const [dataSource,setDataSource] = useState<object[]>([]);
    const [tabkey,setTabkey] = useState<string>();
    const [tabmenu,setTabMenu] = useState<Tmenu[]>([]);
    const getMenu =async ()=>{
        const {data:res} = await POST(apiUrl.getMenu);
        setTabMenu(res)
    }
    //路由动态定位
    useEffect(() => {
        setTabkey(key);
      }, [key])
    //初始化获取菜单及消息数  
    useEffect(() => {
      getMenu()
    }, [])
    const  onSelectChange = (selectedRowKey:any,selectedRows:any) => {
        console.log('selectedRowKeys changed: ', selectedRows);
        // this.setState({ selectedRowKeys });
        setSelectedRowKeys(selectedRowKey)
      };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    return (
        <>
            <Tabs type="card">
                    <Tabs.TabPane tab="消息中心" key="1">
                    </Tabs.TabPane>
            </Tabs>
            <Divider />
            <Tabs tabPosition={'left'} style={{height:'50vh'}} activeKey={tabkey}>
                {
                    tabmenu.map((record,index)=>{
                      if(index==0){
                        return (  <Tabs.TabPane tab={<Tab content={record.content} num={record.num}/>} key={record.key}>
                            <CustomTable  columns={columns} dataSource={dataSource} rowSelection={rowSelection} />
                        </Tabs.TabPane>)
                      }else{
                        return (  <Tabs.TabPane tab={<Tab content={record.content} num={record.num}/>} key={record.key}>
                            {record.content}
                        </Tabs.TabPane>)
                      }  
                    })
                }
                {/* <Tabs.TabPane tab={<Tab content={"全部消息"} num={9}/>} key="all">
                  <CustomTable  columns={columns} dataSource={dataSource} rowSelection={rowSelection} />
                </Tabs.TabPane>
                <Tabs.TabPane  tab={<Tab content={"运营消息"} num={5}/>} key="operation">
                运营消息
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Tab content={"系统消息"} num={2}/>} key="system">
                系统消息
                </Tabs.TabPane>
                 <Tabs.TabPane tab={<Tab content={"消息设置"}/>} key="setting">
                     消息设置
                </Tabs.TabPane>  */}
            </Tabs>
        </>
    )
}