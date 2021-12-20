import { CardProps } from 'antd';
import ProCard from './ProCard';
import ProGrid from './ProGrid';
import ProMeta from './ProMeta';

// 继承antd Card
export interface ProCardProps extends CardProps {}

/** interface方式 */
export interface ProCardInterface extends React.FC<CardProps> {
  Grid: typeof ProGrid;
  Meta: typeof ProMeta;
}

/** type方式 */
// export type ProCardInterface = React.FC<CardProps> & {
// Grid: typeof ProGrid;
// Meta: typeof ProMeta;
// };

/** 指向实例 */
const TransProCard = ProCard as ProCardInterface;
TransProCard.Grid = ProGrid;
TransProCard.Meta = ProMeta;

export default TransProCard;
