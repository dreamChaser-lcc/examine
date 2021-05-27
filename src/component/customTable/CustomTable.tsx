import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
//组件
import Table, { ColumnsType } from 'antd/lib/table'
import { TableRowSelection } from 'antd/lib/table/interface';
import { Checkbox, Col, ConfigProvider, DatePicker, Form, Input, Radio, Row, Select, Space } from 'antd';
//格式
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './index.less'
//方法
import { GET, POST } from '@/axios';
import moment, { Moment } from 'moment';

interface ITableProps{
    columns:ColumnsType<object>,
    dataSource:object[],
    rowSelection:TableRowSelection<object> ,
}
type searchType= {
     user?:string,
     time?:Moment[],
     ASIN?:string,
     Buyers?:string,
     read?:boolean,
}
const CustomTable:FC<ITableProps> = (props)=>{
    const {columns,dataSource,rowSelection}= props;
    const [data,setData] = useState<object[]>();
    const [formRef] = Form.useForm();
    const [searchParams,setSearchParams] = useState<searchType>({});
 
    const getDatasource = async()=>{
        const {data:res} =await GET("/app/tenantUser/operate/Allappraise");
        setData(res)
    }
    //初始化访问服务端数据
    useEffect(() => {
        getDatasource();
    }, [])
    const handleSearch = async(searchParams:searchType)=>{
      console.log("请求参数-----",searchParams)
      if(JSON.stringify(searchParams) !='{}'){
        const {data:res} = await POST('/app/tenantUser/operate/Allappraise/unread',searchParams)
        setData(res)
      }
    }
    // 搜索条件改变
    useEffect(() => {
        handleSearch(searchParams)
    }, [searchParams])
    const option =[{values:"first",label:"第一"},{values:"seconds",label:"第二"},{values:"third",label:"第三"}];
    const handleClick = ()=>{
        console.log()
        const change:object[] = [  {
            key: 2,
            name: `Edward King `,
            age: 32,
            address: `London, Park Lane no. `,
        }]
        setData([{
            key: 2,
            name: `Edward King `,
            age: 322,
            address: `London, Park Lane no2123. `,
        }])
    }
    //只看已读
    const checkBoxChange = (e:any)=>{
        const able = e.target.checked;
        setSearchParams({...searchParams,read:able})
    }
    //负责人选择
    const handleChange = (value:any)=>{
        const key ={...searchParams,user:value};
        //console.log(key)
        setSearchParams(key)
    }
    //选择时间
    const handleDataChange = (time:any)=>{
        const key ={...searchParams,time};
        setSearchParams(key)
    }
    //搜索按钮
    const onSearch = (e:any)=>{
        const key ={...searchParams,ASIN:e};
        setSearchParams(key)
    }
    const reset = ()=>{
      setSearchParams({})
      formRef.resetFields(); 
    }
    const leftOperation:ReactNode[] = [
        (<Radio.Button value="large">标记已读</Radio.Button>),
        (<Checkbox onChange={checkBoxChange}>只看未读</Checkbox>)
    ]
    const rightOperation:ReactNode[] = [
       ( 
            <Form form={formRef} layout='inline'>
                <Form.Item name='select'>
                    <Select style={{ width:100,textAlign:'left'}} placeholder={'负责人'} onChange={handleChange}>
                        {
                            option.map(item=>{
                                return <Select.Option value={item.values} key={item.values}>{item.label}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
            </Form>
        ),
        (
            <Form form={formRef} layout='inline'>
                <Form.Item name='picker'>
                    <ConfigProvider  locale={zh_CN}>
                            <DatePicker.RangePicker style={{width:'250px'}} onChange={handleDataChange} format={"YYYY/MM/DD"}/>
                    </ConfigProvider>
                </Form.Item>
            </Form>
        ),
        (
            <Form form={formRef} layout='inline'>
                <Form.Item name='input'>
                     <Input.Search onSearch={onSearch}/>
                </Form.Item>
            </Form>
        ),
        (<Radio.Button onClick={reset} value="large">重置</Radio.Button>)
    ]
    
    return (
        <div className="container">
           <Row className='tableHead' justify={"space-between"} align={'middle'}>
                <Col id='left' span={12}>
                    <Space size="middle">
                          {leftOperation.map(item=>item)}
                    </Space>
                </Col>
                <Col id='right' span={12}>
                   <div className='right' >
                     <Space size="middle">
                       {rightOperation.map(item=>item)}
                      </Space>
                  </div>
                </Col>
             </Row>
           <Table rowSelection={rowSelection} loading={false} columns={columns} dataSource={data} />
        </div>
    )
}
export default CustomTable