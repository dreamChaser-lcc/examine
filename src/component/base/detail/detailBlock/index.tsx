import { Children, FC } from 'react';
interface IDetailProps {
  isDetail: boolean;
  filedValue?: any;
}
const DetailBlock: FC<IDetailProps> = (props) => {
  const { isDetail, filedValue } = props;
  if (isDetail) {
    return (
      <div style={{ borderBottom: '1px dashed #95afc0' }}>{filedValue}</div>
    );
  }
  return (
    <>
      {Children.map(props.children, (child) => {
        return child;
      })}
    </>
  );
};
export default DetailBlock;
