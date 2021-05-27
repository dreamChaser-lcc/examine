import React, { useState } from 'react'
import { Card, Image, Modal } from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
export default ()=>{
    const [visible,setVisible] = useState<boolean>(false);
    const visibleChange =(value:boolean)=>{
      setVisible(value)
    }
    return (<>
        <Modal title="Basic Modal" visible={visible} onCancel={()=> setVisible(false)}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
        <Card title={"预览DIY"} style={{margin:'20px'}}>
                <Image
                    width={150}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={{
                        visible:false,
                        mask:(<><QuestionCircleOutlined/>预览</>),
                        onVisibleChange:visibleChange,
                        src:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
                    }}
                />
        </Card>
        <Card title={"图片预览组"} style={{margin:'20px'}}>
            <Image.PreviewGroup>
            <Image
                    width={200}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
            <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            />
            </Image.PreviewGroup>
        </Card>
    </>
    )
}