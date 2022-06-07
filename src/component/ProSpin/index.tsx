import { FC, CSSProperties, useState } from 'react';
// 组件
import { Spin } from 'antd';
// import 'antd/dist/antd.css';

interface IProSpinProps {
  visibility: boolean;
}

const ProSpin: FC<IProSpinProps> = (props) => {
  const { visibility } = props;
  const [spinning, setSpinning] = useState<boolean>(visibility);
  const containerStyle: CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    background: '#fafafa',
    opacity: 0.6,
  };
  return (
    <div style={containerStyle}>
      <Spin
        spinning={spinning}
        size="default"
        tip="loading..."
        style={{ position: 'absolute', left: '50%', top: '50%' }}
      />
    </div>
  );
};
const show = (visibility: boolean = true) => {
  return ProSpin({ visibility });
};
const hide = (visibility: boolean = false) => {
  return ProSpin({ visibility });
};
type FCType = FC<IProSpinProps> & {
  show: typeof show;
} & {
  hide: typeof hide;
};
const transForm = ProSpin as FCType;
transForm.show = show;
transForm.hide = hide;
export default transForm;
