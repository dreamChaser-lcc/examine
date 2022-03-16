import { FC } from 'react';
// 组件
import {
  EllipsisOutlined,
  CommentOutlined,
  DisconnectOutlined,
} from '@ant-design/icons';
import { Avatar, Card, List } from 'antd';

interface ITaskCardProps {}
const TaskCard: FC<ITaskCardProps> = (props) => {
  const data = [
    {
      title: 'Customers1',
      avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
      title: 'Customers2',
      avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
    {
      title: 'Customers3',
      avatar: <Avatar src="https://joeschmoe.io/api/v1/random" />,
    },
  ];
  return (
    <>
      <Card
        size="small"
        title="New Customers"
        extra={<EllipsisOutlined />}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item actions={[<CommentOutlined />, <DisconnectOutlined />]}>
              <List.Item.Meta
                avatar={item?.avatar}
                title={item?.title}
                description={`description${index}`}
              />
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};
export default TaskCard;
