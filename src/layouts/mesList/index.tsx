import { List } from 'antd'
import React, { FC } from 'react'


interface mesProps {
    datasource:any[];

}
const MesList:FC<mesProps> = (props)=>{
    const {datasource} = props;
    return (
        <>
        <List itemLayout="horizontal" dataSource={datasource}  renderItem={item => (<List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item?.content}</a>}
              description={item.time}
            />
          </List.Item>) }/> 
        </>
    )
}
export default MesList