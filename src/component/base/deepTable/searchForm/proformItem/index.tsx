import { FC } from 'react';
// 组件
import { Col, Form } from 'antd';
// 方法
import classNames from 'classnames';
// 常量
import { ProFormItemProps } from '../interface';
import '../styles/index.less';

const ProFormItem: FC<ProFormItemProps> = (props) => {
  const {
    span,
    children,
    label,
    fieldProps,
    formItemType,
    ...restProps
  } = props;
  const key = `${restProps?.name}`;
  const className = classNames('append-tips');
  return (
    <Col className={className} data-tips={label} span={span} key={key}>
      <Form.Item name={restProps?.name} {...restProps}>
        {children}
      </Form.Item>
    </Col>
  );
};
export default ProFormItem;
