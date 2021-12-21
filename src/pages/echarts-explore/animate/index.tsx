// 组件
import ProCard from '@/component/ProCard';
import { Switch } from 'antd';
import HtmlTable from './htmlTable';
// 方法
import { useData } from './hooks/useData';
import './style.less';
const dataSource = [
  { sortNumber: 1, name: 'l', money: '1' },
  { sortNumber: 2, name: 'c', money: '0' },
  { sortNumber: 3, name: 'c', money: '0' },
  { sortNumber: 11, name: 'l1', money: '11' },
  { sortNumber: 21, name: 'c1', money: '01' },
  { sortNumber: 31, name: 'c1', money: '01' },
  { sortNumber: 12, name: 'l2', money: '12' },
  { sortNumber: 22, name: 'c2', money: '02' },
  { sortNumber: 32, name: 'c2', money: '02' },
  { sortNumber: 311, name: 'l1', money: '11' },
  { sortNumber: 321, name: 'c1', money: '01' },
  { sortNumber: 331, name: 'c1', money: '01' },
  { sortNumber: 312, name: 'l2', money: '12' },
  { sortNumber: 322, name: 'c2', money: '02' },
  { sortNumber: 332, name: 'c2', money: '02' },

  { sortNumber: 41, name: 'l', money: '1' },
  { sortNumber: 42, name: 'c', money: '0' },
  { sortNumber: 43, name: 'c', money: '0' },
  { sortNumber: 411, name: 'l1', money: '11' },
  { sortNumber: 421, name: 'c1', money: '01' },
  { sortNumber: 431, name: 'c1', money: '01' },
  { sortNumber: 412, name: 'l2', money: '12' },
  { sortNumber: 422, name: 'c2', money: '02' },
  { sortNumber: 432, name: 'c2', money: '02' },
  { sortNumber: 4311, name: 'l1', money: '11' },
  { sortNumber: 4321, name: 'c1', money: '01' },
  { sortNumber: 4331, name: 'c1', money: '01' },
  { sortNumber: 4312, name: 'l2', money: '12' },
  { sortNumber: 4322, name: 'c2', money: '02' },
  { sortNumber: 4332, name: 'c2', money: '02' },
];
const columns = [
  {
    title: '排序',
    dataIndex: 'sortNumber',
  },
  {
    title: '用户名',
    dataIndex: 'name',
  },
  {
    title: '金额',
    dataIndex: 'money',
  },
];
export default () => {
  const animationConfig = {
    /**滚动频率 */
    time: 1 * 1000,
    /**起始索引 */
    curIndex: 0,
    /**展示条数 */
    size: 6,
    /**数据长度 */
    length: dataSource.length,
  };
  // 获取表格数据、获取动画事件、停止动画事件
  const { formatData, playAnimate, stopAnimate } = useData(
    dataSource,
    animationConfig,
    'reverse',
  );
  // 开启关闭动画
  const handleSwitch = (abled: boolean) => {
    if (abled) {
      playAnimate();
    } else {
      stopAnimate();
    }
  };
  return (
    <div id="animate-fadeInRight">
      <ProCard title="简单css3，右到左动画">
        <div className="div1 animated-fadeInRight"></div>
      </ProCard>

      <ProCard
        title="动态滚动表格"
        extra={
          <Switch
            checkedChildren="开启动画"
            unCheckedChildren="停止动画"
            onClick={handleSwitch}
            defaultChecked
          />
        }
      >
        <HtmlTable
          dataSource={formatData ?? []}
          onMouseEnter={() => {
            stopAnimate();
          }}
          onMouseLeave={() => {
            playAnimate();
          }}
          rowkey="sortNumber"
          columns={columns}
        />
      </ProCard>
    </div>
  );
};
