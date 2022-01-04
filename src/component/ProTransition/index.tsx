import { FC } from 'react';
// 组件
import {
  TransitionGroup,
  Transition,
  CSSTransition,
} from 'react-transition-group';
// 样式
import './style.less';

interface IProTransition {
  disabled: boolean;
}
/**过渡动画组件 */
const ProTransition: FC<IProTransition> = (props) => {
  const { children, disabled } = props;
  const defaultStyle = {
    transition: `opacity ${500}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  return (
    <div className="protransition-wrapper">
      <Transition in={disabled} timeout={500}>
        {(state: any) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
        {/* <CSSTransition key={'css-transition'} timeout={300} classNames="item">
       
        </CSSTransition> */}
      </Transition>
    </div>
  );
};
export default ProTransition;
