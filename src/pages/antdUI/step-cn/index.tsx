import { Steps,Card, Popover} from 'antd'
import {LoadingOutlined} from '@ant-design/icons';
import React from 'react';
type mesType=  'wait' | 'process' | 'finish' | 'error';
interface statusProps {
    current:number,
    mes:'wait' | 'process' | 'finish' | 'error',
    stepList:any[],
}
export default ()=>{
    const status:statusProps = {
        current:1,
        mes:'finish',
        stepList:[{title:'未通过',description:"2021-10-1",subTitle:"sdsd"},{title:'1',description:"2",subTitle:"2",icon:<LoadingOutlined />},{title:'1',description:"2",subTitle:"2"}],
    }
    const customDot = (dot:any, { status, index }:any) => (
        <Popover
          content={
            <span>
              step {index} status: {status}
            </span>
          }
        >
          {dot}
        </Popover>
      );
    return (
        <>
            <Card title="步骤条" style={{margin:'20px'}}>
                <Steps >
                    <Steps.Step title="Finished" description="This is a description." />
                    <Steps.Step status={"process"} icon={<LoadingOutlined />} title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                    <Steps.Step title="Waiting" description="This is a description." />
                </Steps>
            </Card>
            <Card title="给定初始值和状态" style={{margin:'20px'}}>
                <Steps current={status.current} size={'small'} >
                    {
                        status.stepList.map((item:any)=>{
                           return <Steps.Step title={item.title}  />
                        })
                    }
                </Steps>
            </Card>
            
            <Card title="点状步骤条" style={{margin:'20px'}}>
                <Steps current={1} progressDot={customDot}>
                    <Steps.Step title="Finished" description="You can hover on the dot." />
                    <Steps.Step title="In Progress" description="You can hover on the dot." />
                    <Steps.Step title="Waiting" description="You can hover on the dot." />
                    <Steps.Step title="Waiting" description="You can hover on the dot." />
                </Steps>
            </Card>
        </>
    )
}