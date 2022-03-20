import { FC, memo, ReactNode } from 'react';
// 组件
import { Card, Tag } from 'antd';
import {
  CloudTwoTone,
  AccountBookTwoTone,
  LikeTwoTone,
  SmileTwoTone,
} from '@ant-design/icons';
// 样式
import './style.less';

interface ICardConfigProps {
  key: string;
  /**头部文本*/
  tLabel: ReactNode;
  tValue: ReactNode;
  /**Content 文本 */
  cLabel: ReactNode;
  cValue: ReactNode;
  /**Footer 文本 */
  fLabel: ReactNode;
  fValue: ReactNode;
}
const DSummary: FC = () => {
  const cardConfig: ICardConfigProps[] = [
    {
      key: 'visitNum',
      tLabel: '访问数',
      tValue: <Tag color="green">日</Tag>,
      cLabel: '2,000',
      cValue: <CloudTwoTone style={{ fontSize: 50 }} twoToneColor="#f39c12" />,
      fLabel: '总访问数',
      fValue: '12000',
    },
    {
      key: 'dealQuota',
      tLabel: '成交额',
      tValue: <Tag color="blue">月</Tag>,
      cLabel: '$20,000',
      cValue: (
        <AccountBookTwoTone style={{ fontSize: 50 }} twoToneColor="#74b9ff" />
      ),
      fLabel: '总成交额',
      fValue: '$500,000',
    },
    {
      key: 'downloadNum',
      tLabel: '下载量',
      tValue: <Tag color="orange">周</Tag>,
      cLabel: '8,000',
      cValue: <LikeTwoTone style={{ fontSize: 50 }} twoToneColor="#2ecc71" />,
      fLabel: '总下载量',
      fValue: '12000',
    },
    {
      key: 'dealNum',
      tLabel: '成交数',
      tValue: <Tag color="magenta">年</Tag>,
      cLabel: '1,000',
      cValue: <SmileTwoTone style={{ fontSize: 50 }} twoToneColor="#f8a5c2" />,
      fLabel: '总成交数',
      fValue: '12000',
    },
  ];

  return (
    <div className="dsummary-warp">
      {cardConfig.map((item) => {
        return (
          <Card
            key={item.key}
            className="w:1/4"
            title={item.tLabel}
            extra={item.tValue}
          >
            <div className="pd-12 fs-20 flex between center">
              <span>{item.cLabel}</span>
              <span>{item.cValue}</span>
            </div>
            <div className="pd-10 fs-14 flex between">
              <span>{item.fLabel}</span>
              <span>{item.fValue}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
export default memo(DSummary);
