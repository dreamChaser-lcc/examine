import React, { FC } from 'react'
import { Col, Descriptions, Row } from 'antd'

interface IDescriptTop{
    dataSource:any,
}
const DescriptTop:FC<IDescriptTop> = (props)=>{
    const { dataSource } = props;
    // console.log(dataSource)
    const title = (
        <Row>
            <Col span={8}><h1>{dataSource?.type}</h1></Col>
            <Col span={4} offset={12}>
                 <a href="">查看详情</a>
            </Col>
        </Row>
    )
    return (<>
            <Descriptions title={title} column={1}>
                        <Row>
                            <Col><img style={{width:'100px',height:'100px'}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="商品" /></Col>
                            <Col offset={1} span={16}>SAGUARO Pantofole da Casa Ragazze Pantofole in Maglia Bambini Antiscivolo Pantofole per Bambino con Suola Rosa Scuro 20/21 EU
                                <p style={{color:'#1890FF'}}>{dataSource?.ASUI}</p>
                            </Col>
                        </Row>    
            </Descriptions>
    </>)
}
export default DescriptTop