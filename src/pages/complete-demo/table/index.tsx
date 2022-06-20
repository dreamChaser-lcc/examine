// 组件
import DeepTable from '@/component/base/deepTable';
import { IDeepTableProps } from '@/component/base/deepTable/interface';
// 常量
import { columns, formItems } from './tableConfig';

export default (props: Partial<IDeepTableProps>) => {
  const dataSource: any[] = new Array(20).fill(1).map((item, index) => {
    return {
      // key: '1',
      name: `${index}`,
      age: 32,
      gender: index % 2 > 0 ? 'girl' : 'boy',
      activeStatus: index % 2 > 0,
      address: `仓山区万达1${index}号`,
    };
  });
  return (
    <div id="tableId">
      <DeepTable
        dataSource={dataSource}
        rowKey="name"
        formItems={formItems}
        columns={columns}
        onOperationClick={() => {}}
        {...props}
      />
    </div>
  );
};
