import { FC, ReactNode, useContext } from 'react';
// 组件
import BaseContext from '@/globalContext';
import { Dropdown, Menu } from 'antd';
// 常量
import { actionType } from '@/globalContext/hook';

interface IMenuConfigProps {
  key: actionType;
  label: ReactNode;
  iconCode?: string;
}

interface IDropMenusProps {
  children?: ReactNode;
  tabInfo: any;
}
/**右键下拉菜单 */
const DropMenus: FC<IDropMenusProps> = (props) => {
  const { children, tabInfo } = props;
  const { dispatch, routerTabs } = useContext(BaseContext);

  /**下拉菜单配置 */
  const menuConfig: IMenuConfigProps[] = [
    {
      key: 'closeToLeft',
      label: '关闭左侧标签页',
    },
    {
      key: 'closeToRight',
      label: '关闭右侧标签页',
    },
    {
      key: 'closeOther',
      label: '关闭其他标签页',
    },
  ];
  /**下拉菜单 */
  const menu = (
    <Menu
      onClick={(menuItem) => {
        const action = menuItem.key as actionType;
        dispatch(action, tabInfo);
      }}
    >
      {menuConfig.map((item) => {
        return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <div style={{ height: '100%', width: '100%' }}>{children}</div>
    </Dropdown>
  );
};
export default DropMenus;
