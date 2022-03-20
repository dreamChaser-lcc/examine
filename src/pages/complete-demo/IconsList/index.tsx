import { FC } from 'react';
// 组件
import MyIcon from '@/component/myIcon';
import { Card, message } from 'antd';
import { iconsConfig } from './iconsConfig';
import { copyText } from '@/utils/common_utils';

const IconsList: FC = () => {
  const generateTemp = (text: string) => {
    return `<MyIcon type="${text}"/>`;
  };
  const copyIcon = async (iconItem: { title: string; code: string }) => {
    const res = await copyText(iconItem.code, generateTemp);
    message.success(`${res}  复制成功`);
  };
  return (
    <Card
      title="可点击复制使用（IE除外）"
      style={{ width: '100%', height: '100%' }}
    >
      {iconsConfig.map((item) => {
        return (
          <Card.Grid
            key={item.code}
            style={{ width: '20%', textAlign: 'center' }}
            onClick={() => {
              copyIcon(item);
            }}
          >
            <MyIcon type={item.code} />
            <div>{item.title}</div>
          </Card.Grid>
        );
      })}
    </Card>
  );
};
export default IconsList;
