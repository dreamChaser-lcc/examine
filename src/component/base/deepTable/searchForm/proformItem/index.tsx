import { FC, useMemo } from 'react';
// 组件
import { Col, Form } from 'antd';
// 方法
import classNames from 'classnames';
// 常量
import { FormItemWidthEnum, ProFormItemProps } from '../interface';
import '../styles/index.less';

const ProFormItem: FC<ProFormItemProps> = (props) => {
  const {
    span,
    children,
    label,
    width,
    fieldProps,
    formItemType,
    ...restProps
  } = props;

  const className = classNames('append-tips');
  /**FormItem宽度配置 */
  const wrapConfig = useMemo(() => {
    if (span) {
      return { span };
    }
    return {
      style: { width: width ? width : FormItemWidthEnum[formItemType] },
    };
  }, [span, width]);
  return (
    <Col className={className} data-tips={label} {...wrapConfig}>
      <Form.Item name={restProps?.name} {...restProps}>
        {children}
      </Form.Item>
    </Col>
  );
};
export default ProFormItem;
