/**
 * 生成面包屑 key和title键值对
 * @returns {
 *  key:title
 * }
 */
export const getBreadCrumbMenus = () => {
  const result: Record<string, string> = {};
  const generate = (originArr: any[]) => {
    originArr.forEach((item) => {
      const { key, children } = item;
      if (key) result[key] = item.title;
      if (Array.isArray(children) && children.length) {
        generate(children);
      } else return;
    });
  };
  generate(menus);
  return result;
};
export const menus = [
  // 菜单的配置项，用于动态渲染 key:	唯一标志 title: 菜单项值 path：用于路由跳转
  {
    key: 'dashboard',
    title: 'dashboard',
    path: '/dashboard'
  },
  {
    key: 'antdUI',
    title: 'antd组件',
    children: [
      { key: 'g2-legend', title: 'G2可视化使用', path: '/antdUI/g2-legend' },
      { key: 'calendar', title: 'Calender日历', path: '/antdUI/calendar-cn' },
      { key: 'form-cn', title: 'Form表单', path: '/antdUI/form-cn' },
      { key: 'step-cn', title: 'Step步骤条', path: '/antdUI/step-cn' },
      { key: 'image-cn', title: 'Image图片', path: '/antdUI/image-cn' },
      {
        key: 'combination',
        title: 'Tabs+Table',
        path: '/antdUI/combination',
      },
      { key: 'tree-cn', title: 'tree树', path: '/antdUI/tree-cn' },
      {
        key: 'upload',
        title: 'Upload上传',
        children: [
          { key: 'file-upload', title: '文件上传', path: '/antdUI/upload/file-upload', },
          { key: 'image-upload', title: '图片上传', path: '/antdUI/upload/image-upload', },
        ],
      },
      { key: 'datePicker-cn', title: 'DatePicker日期', path: '/antdUI/datePicker-cn', },
      { key: 'datePicker-cn1', title: 'DatePicker日期1', path: '/antdUI/datePicker-cn1', },
    ],
  },
  {
    key: 'complete-demo',
    title: '封装完成的组件',
    children: [
      { key: 'modal', title: '动态对话框', path: '/complete-demo/modal', },
    ]
  },
  { key: 'protable-cn', title: 'ProTable表格', path: '/protable-cn' },
  { key: 'debug-page', title: '调试组件页面', path: '/debug-page' },
  { key: 'select-cn', title: 'select选择', path: '/select-cn' },
  { key: 'fetch-Spell', title: '封装多个函数组件', path: '/fetch-Spell' },
  {
    key: 'assembly',
    title: 'assembly',
    children: [{ key: 'select',title:'select',path: '/assembly/select' }]
  },
  {
    key: 'echarts-explore',
    title: 'echart探索',
    children: [
      { key: 'lineAndpie', title: '折线图&饼图', path: '/echarts-explore/lineAndpie', },
      { key: 'ploar', title: '极坐标系', path: '/echarts-explore/polar', },
      { key: 'scrollTable', title: '滚动表格', path: '/echarts-explore/scrollTable', },
      { key: 'bigScree', title: '数据大屏', path: '/echarts-explore/bigScreen', },
      { key: 'animate', title: 'css3动画', path: '/echarts-explore/animate', },
    ]
  },
  { key: 'message', title: '消息中心', path: '/message' },
  { key: 'globalState', title: 'hooks的全局状态共享', path: '/globalState' },
  { key: 'test-ts', title: 'test模块', path: '/test-ts' },
  { key: 'sortable', title: 'sortable拖拽数据', path: '/sortable' },
];
