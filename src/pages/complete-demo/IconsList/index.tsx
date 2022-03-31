import { FC, useState } from 'react';
// 组件
import MyIcon from '@/component/myIcon';
import { Card, message, Space, Switch } from 'antd';
import { iconsConfig } from './iconsConfig';
import { copyText } from '@/utils/common_utils';

const IconsList: FC = () => {
  const [copyType, setCopyType] = useState<boolean>(true);

  const generateTemp = (text: string) => {
    return `<MyIcon type="${text}"/>`;
  };
  const copyIcon = async (iconItem: { title: string; code: string }) => {
    let res: string | false;
    if (copyType) {
      res = await copyText(iconItem.code, generateTemp);
    } else {
      res = await copyText(iconItem.code);
    }
    if (res) {
      message.success(`${res}  复制成功`);
    } else {
      message.error('复制失败');
    }
  };
  return (
    <Card
      title="可点击复制使用（IE除外）"
      style={{ width: '100%', }}
      extra={
        <Space>
          复制类型:
          <Switch
            checked={copyType}
            onChange={(checked) => {
              setCopyType(checked);
            }}
            checkedChildren="组件"
            unCheckedChildren="Icon-code"
            defaultChecked
          />
        </Space>
      }
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
