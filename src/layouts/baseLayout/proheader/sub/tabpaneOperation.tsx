import { FC, useState } from 'react';
// 组件
import MyIcon from '@/component/myIcon';

enum Option_Config_Enum {
  'FullScreen' = 'FullScreen',
}
interface ITabpaneOperationProps {}
const TabpaneOperation: FC<ITabpaneOperationProps> = () => {
  const optionConfig = [
    {
      key: Option_Config_Enum.FullScreen,
      alt: '全屏',
      fullIcon: 'icon-quanping',
      closeIcon: 'icon-quxiaoquanping',
    },
  ];
  const [screenAble, setScreenAble] = useState<boolean>();
  return (
    <div style={{ width: 100, height: '100%' }}>
      {/* <span style={{borderRight:'1px solid #fafafa',display:'inline-block',height:'100%'}}>
        <MyIcon size={11} type="icon-quanping" />
      </span> */}
    </div>
  );
};
export default TabpaneOperation;
