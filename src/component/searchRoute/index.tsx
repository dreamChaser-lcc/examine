/*
 * @Author: lcc
 * @Date: 2023-05-27 21:42:10
 * @LastEditors: lcc
 * @LastEditTime: 2023-05-27 21:42:29
 * @Description:
 */
import { FC, useState, useMemo } from 'react';
import { TreeSelect, Button, message } from 'antd';
import { menus } from '@/../config.router';
import { SearchOutlined } from '@ant-design/icons';
import { history } from 'umi';

interface IProps {}
const SearchRoute: FC<IProps> = () => {
  const [selected, setSelected] = useState<any>();
  const [selectedRow, setSelectedRow] = useState<Record<string, any>>();

  const onChange = (key: any, title: any, { triggerNode }: any) => {
    setSelected(key);
    setSelectedRow(triggerNode?.props);
  };

  const handleClick = () => {
    if (!selectedRow) {
      history.push('/');
      return;
    }
    if (!selectedRow?.path) {
      return message.error('不存在该菜单');
    }
    history.push(selectedRow?.path);
  };

  const treeData = useMemo(() => {
    return menus.map((treeNode: any) => {
      if (Array.isArray(treeNode?.children) || treeNode?.children?.length > 0) {
        treeNode.selectable = false;
      }
      return treeNode;
    });
  }, [menus]);

  return (
    <div className="flex-center">
      <TreeSelect
        showSearch
        style={{ width: '100%', minWidth: 200 }}
        fieldNames={{ label: 'title', value: 'key', children: 'children' }}
        value={selected}
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
        }}
        placeholder="请输入菜单名称"
        allowClear
        // treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
      <Button
        onClick={handleClick}
        style={{ background: '#f45b0f', color: '#fff' }}
        // shape="round"
        // icon={<SearchOutlined />}
        size="middle"
      >
        Go
      </Button>
    </div>
  );
};

export default SearchRoute;
