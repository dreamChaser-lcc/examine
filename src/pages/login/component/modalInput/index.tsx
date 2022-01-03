import React, { FC } from 'react';
import { Input } from 'antd';

interface IModalInput {}
const ModalInput: FC<IModalInput> = (props) => {
  return (
    <div className="inputWrapper">
      <Input bordered={false} />
      <label>密码</label>
    </div>
  );
};
export default ModalInput;
