import React, { FC, useEffect, useState } from 'react'

import { Breadcrumb, Divider, Space, Tabs } from 'antd'
import CustomTable from '@/component/customTable/CustomTable';
import './style.less'
import { columns } from './tableConfig';
import { GET } from '@/axios';

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
export default ()=>{
    const [selectedRowKeys,setSelectedRowKeys] = useState();
    const [dataSource,setDataSource] = useState<object[]>([]);
    const tab = (<>
         <Divider />
         <Space size="large">
            <div>全部消息</div>
            <div> 9 </div>
         </Space>
    </>)
    useEffect(() => {
   
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
            <Tabs tabPosition={'left'} style={{height:'50vh'}} >
                <Tabs.TabPane tab={<Tab content={"全部消息"} num={9}/>} key="1">
                  <CustomTable  columns={columns} dataSource={dataSource} rowSelection={rowSelection} />
                </Tabs.TabPane>
                <Tabs.TabPane  tab={<Tab content={"运营消息"} num={5}/>} key="2">
                运营消息
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Tab content={"系统消息"} num={2}/>} key="3">
                系统消息
                </Tabs.TabPane>
                <Tabs.TabPane tab={<Tab content={"消息设置"}/>} key="4">
                消息设置
                </Tabs.TabPane>
            </Tabs>
        </>
    )
}