import { CSSProperties, FC, useEffect, useRef } from 'react';

interface IRectCodeProps {
  width: number;
  height: number;
}
const RectCode: FC<IRectCodeProps> = (props) => {
  const { width, height } = props;
  const mainRef = useRef<HTMLCanvasElement>(null);
  const randomNum = (min: number, max: number) => {
    return max - Math.floor((max - min) * Math.random());
  };
  const randomColor = () => {
    const r = randomNum(0, 255);
    const g = randomNum(0, 255);
    const b = randomNum(0, 255);
    return `rgb(${r},${g},${b})`;
  };
  const drawArc = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const x = randomNum(0, width);
      const y = randomNum(0, height);
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fillStyle = randomColor();
      ctx.stroke();
      ctx.closePath();
    }
  };
  const drawLine = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < 10; i++) {
      const x = randomNum(0, width);
      const y = randomNum(0, height);

      const originX = randomNum(0, width);
      const originY = randomNum(0, height);
      ctx.moveTo(originX, originY);
      ctx.lineTo(x, y);
    }
  };
  const drawText = (ctx: CanvasRenderingContext2D, chart: string) => {
    ctx.beginPath();
    const fontSize = randomNum(15, 20);
    ctx.font = `${fontSize}px sans-serif`;
    ctx.fillStyle = randomColor();
    ctx.save();
    const x = randomNum(fontSize, width - fontSize);
    const y = randomNum(fontSize, height - fontSize);
    const degree = randomNum(-45, 45);
    // ctx.rotate((Math.PI / 180) * degree);
    ctx.fillText(chart, x, y);
    // ctx.rotate((Math.PI / 180) * -degree);
    ctx.restore();
  };
  const getRandomCode = () => {
    const range = [
      /**0-9 */
      { min: 48, max: 57 },
      /**A-Z */
      { min: 65, max: 90 },
      /**a-z */
      { min: 97, max: 122 },
    ];
    const index = Math.floor(Math.random() * 2);

    const { min, max } = range[index];
    const unicode = randomNum(min, max);
    const chart = String.fromCharCode(unicode);

    if (index === 0) return chart;
    return Math.random() * 2 > 1 ? chart.toLowerCase() : chart.toUpperCase();
  };
  const draw = () => {
    if (!mainRef.current) return false;
    const ctx = mainRef.current.getContext('2d') as CanvasRenderingContext2D;
    const codeArr: string[] = new Array(6).fill(0).map(() => {
      return getRandomCode();
    });
    ctx.fillStyle = randomColor();
    ctx.fillRect(0, 0, width, height);
    codeArr.forEach((item) => {
      drawText(ctx, item);
    });
    drawArc(ctx);
    drawLine(ctx);
  };
  const reload = () => {
    if (!mainRef.current) return false;
    const ctx = mainRef.current.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, width, height);
    draw();
  };
  useEffect(() => {
    draw();
  });
  const wrapStyle: CSSProperties = {
    border: '1px solid #000',
    userSelect: 'none',
  };

  return (
    <>
      <canvas
        ref={mainRef}
        width={width}
        height={height}
        onClick={reload}
        style={wrapStyle}
      />
    </>
  );
};
RectCode.defaultProps = {
  width: 100,
  height: 60,
};
export default RectCode;
