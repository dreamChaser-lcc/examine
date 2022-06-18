import { FC, useRef, useState } from 'react';
// 组件
import { Button, PageHeader, Space } from 'antd';
import DeepForm from '../deepForm';
// 方法
import { unstable_batchedUpdates } from 'react-dom';
import { DetailContext } from './hooks/detailContext';
import { useFormatItems } from './hooks/useFomatItems';
// 常量
import { FormActionType } from '../deepForm/ProForm/interface';
import { SUCCESS_STATUS_CODE } from '@/constants/common';
import { IDetailProps } from './interface';

const Detail: FC<IDetailProps> = (props) => {
  const {
    title,
    actionRef,
    bindId,
    defaultLineNumber,
    formItems,
    onBack,
    onSubmit,
    onBeforeSubmit,
    fetchApi,
    onFinish,
    onFail,
  } = props;
  const formRef = useRef<FormActionType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [detailData, setDetailData] = useState<any>();

  const [newFormItems] = useFormatItems(
    formItems,
    defaultLineNumber,
    detailData,
    isDetail,
  );

  /**显示详情&隐藏绑定id元素 */
  const changeVisible = (action: 'show' | 'hide') => {
    if (!bindId) return;
    const el = document.getElementById(bindId) as HTMLElement;
    if (el) {
      el.style.display = action === 'show' ? 'none' : 'block';
      setVisible(action === 'show');
    }
  };
  const detail = (record?: any) => {
    changeVisible('show');
    unstable_batchedUpdates(() => {
      setIsDetail(true);
      setDetailData(record);
    });
  };
  const edit = (record?: any) => {
    changeVisible('show');
    unstable_batchedUpdates(() => {
      setIsDetail(false);
      setDetailData(record);
    });
    setTimeout(() => {
      formRef.current?.form.setFieldsValue(record);
    });
  };
  const handleConfirm = async () => {
    let params = await formRef.current?.onValidate();
    if (onSubmit) {
      onSubmit?.(params);
      return void 0;
    }
    if (onBeforeSubmit) {
      const isAsyncFunc =
        Object.prototype.toString.call(onBeforeSubmit) ===
        '[object AsyncFunction]';
      params = isAsyncFunc
        ? await onBeforeSubmit?.(params)
        : onBeforeSubmit?.(params);
    }
    if (fetchApi) {
      const res = await fetchApi(params);
      if (res?.code === SUCCESS_STATUS_CODE) {
        onFinish?.(res);
      } else {
        onFail?.(res);
      }
    }
  };
  const handleBack = () => {
    changeVisible('hide');
    onBack?.();
  };
  if (actionRef) {
    actionRef.current = {
      detail,
      edit,
      show: () => {
        changeVisible('show');
      },
      hide: () => {
        changeVisible('hide');
      },
    };
  }
  if (!visible) return null;
  return (
    <DetailContext.Provider value={{ detailData: {} }}>
      <div
        className="detail-wrap"
      >
        <PageHeader
          onBack={handleBack}
          className="detail-head"
          title={title}
          extra={
            <Space>
              <Button type="primary" onClick={handleConfirm}>
                确定
              </Button>
              <Button onClick={handleBack}>取消</Button>
            </Space>
          }
        />
        <DeepForm
          actionRef={formRef}
          labelCol={{ span: 6 }}
          formItems={newFormItems}
        />
      </div>
    </DetailContext.Provider>
  );
};
Detail.defaultProps = {
  defaultLineNumber: 2,
  title: '详情页',
};
export default Detail;
