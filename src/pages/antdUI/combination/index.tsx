import React, { useState,useMemo } from 'react';
import { Card, Table, Tabs } from 'antd'
import './style.less'

export default ()=>{
    const [tabKey,setTabKey] = useState<{key:string}>({key:"3   "});
    const tabpane  = [{tab:'tab1',key:"1"},{tab:'tab2',key:"2"},{tab:'tab3',key:'3'}];
    const columns = [{title:'name1',className:'name',dataIndex:"name",key:'name'},{title:'age1',dataIndex:"age",key:'age'},{title:'gender1',dataIndex:"gender",key:'gender'},{title:'current1',dataIndex:"current",key:'current',render:(text:any)=>{return text.key}}] 
    const data = useMemo(()=>{ return [{key:1,name:'1',age:2,gender:1,current:tabKey}]},[tabKey])
    const toggleTabs = (activeKey:string)=>{
        console.log(activeKey)
        setTabKey({key:activeKey})
    }
    return (<>
      
      <Card style={{margin:"20px",height:'80vh'}}>
        <Tabs onChange={toggleTabs} defaultActiveKey={"3"}>
            {
                tabpane.map(i=>{
                    return <Tabs.TabPane tab={i.tab} key={i.key}></Tabs.TabPane>
                })
            }
        </Tabs>
        <Table columns={columns} dataSource={data} rowKey={"key"}/>
     </Card>
    </>)
}   