import { FC, memo, useEffect, useMemo, useState } from 'react';
// 组件
import { Avatar, Button, Card, List, Space, Tooltip } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

interface IPlanListProps {}
/**计划学习列表 */
const PlanList: FC<IPlanListProps> = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

  const appendData = () => {
    setLoading(true);
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        setLoading(false);
      });
  };
  // 请求数据
  useEffect(() => {
    appendData();
  }, []);
  const planConfig = [
    'Windi CSS是下一代实用程序优先的 CSS 框架，原子CSS的命名规则',
    'TypeScript 是JavaScript的超集，提供了静态检查，类型等，能够大大增强项目可维护性',
    'Vite 是一种新型前端构建工具,开发环境下，快速编译项目，开发体验极好',
    'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时，使得JS能够编写服务器后台',
    'Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。',
  ];

  const hasRefresh = useMemo(() => {
    return (
      <>
        {data?.length ? null : (
          <Space>
            当前网络不加请刷新
            <Button
              loading={loading}
              icon={<RedoOutlined />}
              onClick={() => {
                if (!loading) {
                  appendData();
                }
              }}
            ></Button>
          </Space>
        )}
      </>
    );
  }, [data]);
  return (
    <div style={{ marginTop: '1rem' }}>
      <Card title="计划" extra={hasRefresh}>
        <List>
          {data?.slice(0, 5)?.map((item: any, index: number) => {
            return (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={planConfig?.[index]}
                />
              </List.Item>
            );
          })}
        </List>
      </Card>
    </div>
  );
};
export default memo(PlanList);
