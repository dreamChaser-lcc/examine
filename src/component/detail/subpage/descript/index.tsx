import React, { FC } from "react"
import { Descriptions, Rate } from "antd"

interface IDescriptProps{
    dataSource:any,
}
const Descript:FC<IDescriptProps>=(props)=>{
    const {dataSource} = props;
    // console.log(dataSource)
    return (
        <Descriptions column={2} size='default' contentStyle={{fontFamily:'emoji',lineHeight:"50px"}} labelStyle={{textAlign:'right',width:"70px",lineHeight:"50px"}}>
            <Descriptions.Item label="  店铺">{dataSource?.store}</Descriptions.Item>
            <Descriptions.Item label="卖家信息">{dataSource?.buyersInfo}</Descriptions.Item>
            <Descriptions.Item label="  评级" span={2}>
                <Rate disabled value={dataSource?.grade} style={{}}/>
                <span> Non come da immagine</span>
            </Descriptions.Item>
            <Descriptions.Item label="评价内容" span={2}>{dataSource?.evaluate}</Descriptions.Item>
            <Descriptions.Item label="评价时间" span={2}>{dataSource?.evaluateTime}</Descriptions.Item>
        </Descriptions>
    )
}
export default Descript  