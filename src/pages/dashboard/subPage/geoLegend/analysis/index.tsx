import { Card, List } from 'antd';
import { FC } from 'react';

interface IAnalysisProps {}
const Analysis: FC<IAnalysisProps> = () => {
  const descripteConfig = [
    {
      label: 'asd',
      value: '12',
    },
    {
      label: 'asd',
      value: '12',
    },
    {
      label: 'asd',
      value: '12',
    },
    {
      label: 'asd',
      value: '12',
    },
  ];

  return (
    <>
      <Card size="small" title="visitors">
        <main id="origin">icon total</main>
        <List
          className="description"
          dataSource={descripteConfig}
          split={false}
          renderItem={(item) => (
            <List.Item extra={<>{item?.value}</>}>{item.label}</List.Item>
          )}
        ></List>
      </Card>
    </>
  );
};
export default Analysis;
