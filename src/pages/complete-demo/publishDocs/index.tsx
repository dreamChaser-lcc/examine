/*
 * @Author: dreamChaser-lcc
 * @Date: 2022-07-31 22:54:18
 * @LastEditors: dreamChaser-lcc
 * @LastEditTime: 2022-07-31 23:10:28
 * @Description: 已经发布npm组件的文档
 */
import ProCard from '@/component/ProCard';
import { Button, Space } from 'antd';
export default () => {
  const handleJumpToDocs = () => {
    window.open('http://licc.cloud/stars-lib-docs/');
  };
  return (
    <>
      <ProCard title="已发布Npm的组件及文档">
        <Space>
          <span>预览如下</span>
          <Button type="link" onClick={handleJumpToDocs}>
            点击前往查看
          </Button>
        </Space>

        <iframe
          style={{ width: '100%', minHeight: '450px', marginTop: 10 }}
          src="http://licc.cloud/stars-lib-docs/"
        >
          <p>您的浏览器不支持 iframe 标签。</p>
        </iframe>
      </ProCard>
    </>
  );
};
