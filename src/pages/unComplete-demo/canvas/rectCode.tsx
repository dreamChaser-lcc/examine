import { FC, useEffect, useRef } from 'react';

interface IRectCodeProps {}
const RectCode: FC<IRectCodeProps> = (props) => {
  const mainRef = useRef<HTMLCanvasElement>(null);
  const draw = () => {
    if (!mainRef.current) return false;
    const ctx = mainRef.current.getContext('2d');
    ctx?.fillText('hello world', 20, 50);
  };

  useEffect(() => {
    draw();
  });
  const wrapStyle = {
    border: '1px solid #000',
  };

  return (
    <>
      <canvas ref={mainRef} width={100} height={80} style={wrapStyle} />
    </>
  );
};
export default RectCode;
