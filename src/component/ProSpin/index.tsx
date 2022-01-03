import { Spin } from 'antd';
import { FC } from 'react';
import 'antd/dist/antd.css';

interface IProSpinProps {}
const ProSpin: FC<IProSpinProps> = () => {
  return (
    <div style={{position:'absolute',left:0,top:0,height:'100%',width:'100%',background:'#fafafa',opacity:.6}}>
      <Spin spinning={true} size="default" tip='loadding...' style={{position:'absolute',left:'50%',top:'50%'}}/>;
    </div>
  );
};
export default ProSpin;
