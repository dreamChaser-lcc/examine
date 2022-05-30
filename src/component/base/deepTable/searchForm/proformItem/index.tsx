import { Col, Form } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';
import { ProFormItemProps } from '../interface';
import '../styles/index.less';

const ProFormItem: FC<ProFormItemProps> = (props) => {
  const { name, span, children, label, fieldProps, ...restProps } = props;
  const key = `${name}`;
  const className = classNames('append-tips');
  return (
    <Col className={className} data-tips={label} span={span} key={key}>
      <Form.Item name={name} {...restProps}>
        {children}
      </Form.Item>
    </Col>
  );
};
export default ProFormItem;
