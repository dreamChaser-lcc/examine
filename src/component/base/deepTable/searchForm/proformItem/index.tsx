import { Col, Form } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';
import { ProFormItemProps } from '../interface';
import '../styles/index.less';

const ProFormItem: FC<ProFormItemProps> = (props) => {
  const { name, span, children, ...restProps } = props;
  const key = `${name}`;
  const className = classNames('appendtips');
  return (
    <Col className={className} span={span} key={key}>
      <Form.Item {...restProps}>{children}</Form.Item>
    </Col>
  );
};
export default ProFormItem;
