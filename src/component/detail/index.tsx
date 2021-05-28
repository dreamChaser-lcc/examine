import React, { FC, MutableRefObject, useRef, useState } from 'react'
import { Button, Col, Descriptions, Divider, Drawer, Form, Rate, Row, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import ReplyForm from './subpage/reply';
import Descript from './subpage/descript';
import DescriptTop from './subpage/descriptTop';

export interface IDetailRef{
    onClose?:()=>void,
    onShow?:()=>void
}
export type IDetailRefAction = IDetailRef | undefined;
interface IDetailProps{
    detailRef:MutableRefObject<IDetailRefAction>,
    dataSource:any
}

const Detail:FC<IDetailProps>=(props)=>{
    const {detailRef,dataSource} = props;
    const MesID= dataSource?.id ?? '';
    const [visible,setVisible] = useState<boolean>();
    const [formAble,setFormAble] = useState<boolean>(false);
    //隐藏
    const onClose = () => {
        setVisible(false);
    };
    //显示
    const onShow = () => {
        setVisible(true);
    };
    //Ref赋值
    if(!detailRef.current){
        detailRef.current = {
            onClose:onClose,
            onShow:onShow,
        }
    }
    const onReply = ()=>{
        setFormAble(!formAble)
    }
    const onHide = ()=>{
        setFormAble(false)
    } 
    return (
        <div style={{height:'800px'}}>
            <Drawer
                    title={<Space size={200}><span>Time：2021-5-24</span></Space>}
                    placement="right"
                    width={700}
                    headerStyle={{marginTop:'20px'}}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                     <DescriptTop dataSource={dataSource}/>
                         <Divider />
                    <Descript  dataSource={dataSource}/>
                          <Divider />
                    <Button  size={'middle'} onClick={onReply}>回复</Button>
                    <ReplyForm mesID={MesID} onHide={onHide} visiable={formAble}/>
            </Drawer>
        </div>
        
    )
}
export default Detail