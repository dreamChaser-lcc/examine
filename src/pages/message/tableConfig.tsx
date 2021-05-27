import { ColumnsType } from "antd/lib/table";

export const columns:any[]=[
      {
        title: '消息内容',
        dataIndex: 'content',
      },
      {
        title: '消息类型',
        dataIndex: 'type',
      },
      {
        title: '消息时间',
        dataIndex: 'time',
      },
]
export const dataSource =[
    {
        key: 1,
        name: `Edward King `,
        age: 32,
        address: `London, Park Lane no. `,
    }
]