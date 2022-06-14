import DeepTable, { columnsProps } from '@/component/base/deepTable';
import { ProFormItemProps } from '@/component/base/deepForm/searchForm/interface';

export default () => {
  const dataSource: any[] = new Array(20).fill(1).map((item, index) => {
    return {
      // key: '1',
      name: `${index}`,
      age: 32,
      address: `仓山区万达1${index}号`,
    };
  });

  const columns: columnsProps[] = [
    {
      title: '排序',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
    },
  ];
  const config: ProFormItemProps[] = [
    {
      name: 'field1',
      label: 'field1',
      formItemType: 'Input',
      // span: 6,
      rules: [{ required: true }],
      fieldProps: {
        Input: {
          name: '13',
          placeholder: 'field1',
        },
      },
    },
    {
      name: 'field2',
      label: 'field2',
      formItemType: 'Select',
      // span: 6,
      rules: [{ required: true }],
      fieldProps: {
        Select: {
          placeholder: 'field2',
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ],
        },
      },
    },
    {
      name: 'field3',
      label: 'field3',
      formItemType: 'Select',
      // span: 6,
      fieldProps: {
        Select: {
          placeholder: 'field3',
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ],
        },
      },
    },
    {
      name: 'field4',
      label: 'field4',
      formItemType: 'Select',
      // span: 6,
      fieldProps: {
        Select: {
          placeholder: 'field4',
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ],
        },
      },
    },
    {
      name: 'field5',
      label: 'field5',
      formItemType: 'Select',
      // span: 6,
      rules: [{ required: true }],
      fieldProps: {
        Select: {
          placeholder: 'field5',
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ],
        },
      },
    },
    {
      name: 'field6',
      label: 'field6',
      formItemType: 'Select',
      // span: 6,
      fieldProps: {
        Select: {
          placeholder: 'field4',
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
          ],
        },
      },
    },
  ];
  return (
    <DeepTable dataSource={dataSource} rowKey="name" formItems={config} columns={columns} />
  );
};
