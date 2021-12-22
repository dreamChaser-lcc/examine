import { useEffect } from 'react';
import { FC, useState, useRef } from 'react';
// hooks
import { useModal } from './hook/useModal';
import './style.less';

interface IDynamicModal {
  modalWidth?: number;
  visible: boolean;
  onClose?: () => void;
}
/**
 * 动态弹窗
 * feature:可调整窗口尺寸
 */
const DynamicModal: FC<IDynamicModal> = (props) => {
  const { modalWidth, visible, onClose } = props;
  const resizeTRef = useRef<HTMLDivElement>(null);
  const resizeBRef = useRef<HTMLDivElement>(null);
  const resizeLRef = useRef<HTMLDivElement>(null);
  const resizeRRef = useRef<HTMLDivElement>(null);
  const resizeLTRef = useRef<HTMLDivElement>(null);
  const resizeLBRef = useRef<HTMLDivElement>(null);
  const resizeRTRef = useRef<HTMLDivElement>(null);
  const resizeRBRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const modalWarpRef = useRef<HTMLDivElement>(null);

  const [disabledState, setDisabled] = useState<boolean>();
  const { fullScreen, revert } = useModal({
    resizeTRef,
    resizeBRef,
    resizeLRef,
    resizeRRef,
    resizeLTRef,
    resizeLBRef,
    resizeRTRef,
    resizeRBRef,
    modalRef,
    titleRef,
    modalWarpRef,
  });
  const onFullScreen = () => {
    fullScreen();
  };
  const onRevert = () => {
    revert();
  };
  const onClickClose = () => {
    // setDisabled(false)
    onClose?.();
  };
  return visible ? (
    <div id="dynamicModal">
      {/* <Modal visible title={'动态可调尺寸弹窗'} mask={true} /> */}
      <div className="ant-modal-root">
        <div className="ant-modal-mask"></div>
        <div className="ant-modal-wrap">
          <div
            ref={modalRef}
            className="ant-modal modal-extra"
            style={{ width: modalWidth }}
          >
            <div className="ant-modal-content content-extra">
              <section>
                <div ref={resizeTRef} className="resizeT"></div>
                <div ref={resizeBRef} className="resizeB"></div>
                <div ref={resizeLRef} className="resizeL"></div>
                <div ref={resizeRRef} className="resizeR"></div>
                <div ref={resizeLTRef} className="resizeLT"></div>
                <div ref={resizeLBRef} className="resizeLB"></div>
                <div ref={resizeRTRef} className="resizeRT"></div>
                <div ref={resizeRBRef} className="resizeRB"></div>
              </section>
              <header className="ant-modal-title">
                <div ref={titleRef} className="ant-modal-header title-extra">
                  <div>title</div>
                  <div className="modal-oprate">
                    <button
                      onClick={onRevert}
                      title="恢复初始化大小"
                      type="button"
                      className="min"
                    ></button>
                    <button
                      onClick={onFullScreen}
                      title="全屏"
                      type="button"
                      className="max"
                    ></button>
                    <button
                      onClick={onClickClose}
                      type="button"
                      className="close"
                    ></button>
                  </div>
                </div>
              </header>
              <article className="ant-modal-body body-extra">body</article>
              <footer className="ant-modal-footer">button</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
DynamicModal.defaultProps = {
  modalWidth: 520,
  visible: false,
};
export default DynamicModal;
