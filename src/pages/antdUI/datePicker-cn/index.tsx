import React from 'react';
import { Button, Card, Col, ConfigProvider, DatePicker, Row, Space } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import moment, { Moment } from 'moment'
import Form, { RuleObject } from 'antd/lib/form';

export default ()=>{
    //改变事件获取值
    function handleChange(date:any,dateString:string){
        console.log(date,dateString)
    };
    const defaultValue =moment('2021/10/11',"YYYY/MM/DD");
    //禁止选择当前时间以前的日期
    function disabledDate(current:Moment) {
        return current && current < moment().endOf('day').subtract(1, 'days');
    }
    //表单提交
    const handleFinish = (values:any)=>{
        console.log(values)
    }
    const validator =async (_:RuleObject,values:any)=>{
        if( values==null) return undefined
        if(values[0].format("YYYY-MM-DD HH:mm:ss")===values[1].format("YYYY-MM-DD HH:mm:ss")){
            throw new Error ()
        }
    }
    return (
        <>
        <Row gutter={1} justify={"space-around"} style={{margin:"20px"}}>
            <Col span={11}>
                <Card title={"年月日"}>
                     <Space>
                        <DatePicker onChange={handleChange} format={"YYYY/MM/DD"} />
                        <DatePicker.RangePicker >
                        </DatePicker.RangePicker> 
                    </Space>
                </Card>
            </Col>
            <Col span={11}>
                <Card title={"年月日时分秒"}> 
                 <Space size={"large"}>
                    <DatePicker format={"YYYY-MM-DD HH:mm:ss"} showTime={{hideDisabledOptions:true}}  disabledDate={disabledDate}/>
                    <DatePicker picker={"year"} mode={"year"} />
                    </Space>
                </Card>
            </Col>
        </Row>
      
        <Card title={"中文字体"} style={{margin:"20px 60px"}}>
            <ConfigProvider  locale={zh_CN}>
                <Space>
                    <DatePicker onChange={handleChange} format={"YYYY-MM-DD"}/>
                    <span>
                        默认值：
                        <DatePicker defaultValue={defaultValue} format={"YYYY/MM/DD"}></DatePicker>
                    </span>
                </Space>
            </ConfigProvider>
        </Card>
        <Card title={"开始时间不能与结束时间相同的校验"} style={{margin:"20px 60px"}}>
                <Form onFinish={handleFinish}>
                    <Form.Item label="时间选择" name="range" rules={[{required:true,message:'请选择时间'},{validator:validator,message:'开始时间不能和结束时间相同'}]}>
                         <DatePicker.RangePicker showTime={true} format={"YYYY/MM/DD HH:mm:ss"}>
                         </DatePicker.RangePicker> 
                    </Form.Item> 
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                </Form>
        </Card>
      </>
    )
}