import { CSSProperties, FC } from 'react';

import { createFromIconfontCN } from '@ant-design/icons';
interface IMyIconProps {
  /**图标 */
  type: string;
  /**图标大小 */
  size?: number;
  /**颜色 */
  color?: string;
  /**图标源 */
  scriptUrl?: string;
  /**样式 */
  style?: CSSProperties;
}
const MyIcon: FC<IMyIconProps> = (props) => {
  const { scriptUrl, size, color, style, ...restProps } = props;
  const Icon = createFromIconfontCN({
    scriptUrl: scriptUrl
      ? scriptUrl
      : '//at.alicdn.com/t/font_3262579_hhebhh9sihd.js', // 在 iconfont.cn 上生成
  });
  return (
    <Icon style={{ fontSize: size, color, ...style }} {...restProps}></Icon>
  );
};
MyIcon.defaultProps = {
  size: 25,
};
export default MyIcon;
