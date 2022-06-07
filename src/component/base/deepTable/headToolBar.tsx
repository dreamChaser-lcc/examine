import { FC, ReactNode, CSSProperties, memo } from 'react';
// 组件
import {
  FullscreenOutlined,
  RedoOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';

enum TOOL_Enum {
  'fullScreen' = 'fullScreen',
  'reload' = 'reload',
}
enum TOOL_TIP_Enum {
  'fullScreen' = '全屏',
  'reload' = '刷新',
}

interface IHeadToolBarProps {
  headOperation?: ReactNode[];
  tools?: TOOL_Enum[];
}
const HeadToolBar: FC<IHeadToolBarProps> = (props) => {
  const { headOperation, tools } = props;
  const rowStyle: CSSProperties = {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const toolStyle: CSSProperties = {
    fontSize: 16,
    color: '#636e72',
  };
  /**头部按钮 */
  const renderHeadOperate = () => {
    return headOperation;
  };
  /**工具栏 */
  const renderTool = () => {
    return tools?.map((toolKey) => {
      const props = { key: toolKey };
      let tool: ReactNode;
      switch (toolKey) {
        case 'fullScreen':
          tool = <FullscreenOutlined {...props} />;
          break;
        case 'reload':
          tool = <RedoOutlined {...props} />;
          break;
      }
      return (
        <Tooltip
          placement="top"
          title={TOOL_TIP_Enum[toolKey]}
          arrowPointAtCenter
        >
          {tool}
        </Tooltip>
      );
    });
  };

  return (
    <div style={rowStyle}>
      <div>
        <Space>{headOperation}</Space>
      </div>
      <Space style={toolStyle}>{renderTool()}</Space>
    </div>
  );
};
HeadToolBar.defaultProps = {
  tools: [TOOL_Enum.reload, TOOL_Enum.fullScreen],
  headOperation: [
    <Button type="primary" icon={<PlusOutlined />}>
      新增
    </Button>,
    <Button>Clear filters</Button>,
  ],
};
export default memo(HeadToolBar);
