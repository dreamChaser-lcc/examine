import { Calendar, Col, Row , Card } from "antd"
import React from "react"


export default ()=>{

    return (
        <Row gutter={2} justify={"space-around"} align={"middle"}>
            <Col span={12}>
                <Card title={"嵌套容器"} style={{margin:"20px"}}>
                    <Calendar fullscreen={false}></Calendar>
                </Card>
            </Col>
        </Row>
        
    )
}