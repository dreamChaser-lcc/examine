
import React from 'react'
import { Badge, Card, Layout, List, Menu, Popover, Space } from 'antd';// 布局容器 导航菜单
import { Link } from 'umi' // umi自带的链接组件
import _ from 'lodash'
import { menus } from '../../config.router' 
import '../pages/index.less'
import {BellOutlined} from '@ant-design/icons'
import MesList from './mesList';
const { SubMenu } = Menu // 子菜单
const { Header, Content, Sider } = Layout // 顶部布局， 内容部分， 侧边栏

export default function Layout1 (props: any) {
  const datasource=[
    {content:'第一条',time:'2020-02-04'},
    {content:'第二条',time:'2020-02-04'}
  ]
  function getMenuItem(menuArr: any) { // 获取菜单项
    return _.map(menuArr, route => {
      if(route.children) {  // 有多级菜单时
        return (
          <SubMenu key={route.key} title={route.title}>
            {getMenuItem(route.children)} 
          </SubMenu>
        )
      }
      return <Menu.Item key={route.key}> <Link to={route.path}>{route.title}</Link> </Menu.Item>
    })
  }

   function sideBarRender() {
     return (
       <Sider width={180} style={{ height: 'calc(100vh-48px)'}}>
         <Menu mode='inline' theme='light' style={{ height: '100%', borderRight: 0 }}>
           {getMenuItem(menus)}
         </Menu>
       </Sider>
     )
   }
   const content = (
      <>
      <MesList datasource={datasource}/>
       <div style={{borderTop:"1px solid #f3f3f3",width:"350px",display:'flex',justifyContent:'flex-end',alignItems:'center',lineHeight:'60px'}}>
         <Space>
         {/* <a href="http://localhost:8000/message">查看更多</a> */}
         <Link to="/message?key=all">查看更多</Link>
         <Link to="/message?key=setting">设置</Link>
        </Space>
       </div> 
       </>
   )

    return (
      <Layout>
        <Header className='height-48 head' style={{backgroundColor:'#DEE1E6'}}>
          <div style={{position:'absolute',right:"10vw"}}>
          <Popover placement="bottom"content={content} title="消息提醒" trigger="hover" >
          <Badge count={2} offset={[2,0]} size={'small'}>
             <BellOutlined style={{fontSize:"20px"}}/> 
          </Badge>
          </Popover>
          </div>
          </Header>
        <Layout>
          {sideBarRender()}
          <Layout>
            <Content>
              {/* <div id='milk' style={{ height: 'cacl(100vh-48px)',margin:"10px"}}></div> */}
              <Card id='milk' style={{ height: '85vh',margin:"10px"}}> {props.children} </Card>
             </Content>
           </Layout>
         </Layout>
       </Layout>
    )
}
