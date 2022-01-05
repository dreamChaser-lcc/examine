import { FC, Key } from 'react';
// 组件
import {
  CSSTransition,
  SwitchTransition,
} from 'react-transition-group';
// 样式
import './style.less';

interface IProTransition {
  animatekey?: Key;
  mode?: 'out-in' | 'in-out';
}
/**过渡动画组件 */
const ProTransition: FC<IProTransition> = (props) => {
  const { children, mode, animatekey } = props;
  const cssMode = (
    <div className="protransition-wrapper">
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={animatekey}
          timeout={500}
          unmountOnExit
          classNames="fade"
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
  return cssMode;
};
ProTransition.defaultProps = {
  mode: 'out-in',
};
export default ProTransition;
