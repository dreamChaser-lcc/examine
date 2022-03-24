/**
 * https://www.iconfont.cn/
 * 下面代码复制阿里巴巴矢量图项目控制台
 * 可以爬取配置
 */
// var fetchConfig = () => {
//   var iconconfig = [];
//   document
//     .querySelector('.project-iconlist')
//     .querySelectorAll('li')
//     .forEach((icon) => {
//       const name = icon.querySelector('.icon-name').innerText;
//       const code = icon.querySelector('.icon-code.icon-code-show').innerText;
//       iconconfig.push({ title: name, code: code });
//     });
//   return iconconfig;
// };
// console.log(JSON.stringify(fetchConfig()));

interface IconsConfigProps {
  title: string;
  code: string;
}
export const iconsConfig: IconsConfigProps[] = [
  { title: '取消全屏', code: 'icon-quxiaoquanping' },
  { title: '全屏', code: 'icon-quanping' },
  { title: '关闭其他', code: 'icon-guanbiqita' },
  { title: '关闭右侧', code: 'icon-guanbiyouce' },
  { title: '关闭左侧', code: 'icon-guanbizuoce' },
  { title: 'dashboard', code: 'icon-dashboard' },
  { title: '消息中心', code: 'icon-xiaoxizhongxin' },
  { title: '测试申请', code: 'icon-ceshishenqing' },
  { title: '图表-饼图', code: 'icon-tubiao-bingtu' },
  { title: '调试', code: 'icon-tiaoshi' },
  { title: '组件', code: 'icon-zujian' },
  { title: 'select', code: 'icon-select' },
  { title: '调试', code: 'icon-tiaoshi1' },
  { title: '测试', code: 'icon-ceshi' },
  { title: 'WebHooks', code: 'icon-WebHooks' },
  { title: 'Ant Design', code: 'icon-antdesign' },
  { title: '拖拽', code: 'icon-tuozhuai' },
  { title: '首页dashboard', code: 'icon-shouyedashboard' },
  { title: 'Vue', code: 'icon-Vue' },
  { title: '图表', code: 'icon-tubiao' },
  { title: 'typescript', code: 'icon-typescript' },
  { title: 'react', code: 'icon-react' },
  { title: '首页', code: 'icon-shouye' },
  { title: 'js', code: 'icon-js' },
  { title: '组件化', code: 'icon-zujianhua' },
  { title: 'windicss', code: 'icon-windicss' },
  { title: 'node_js', code: 'icon-node_js' },
];
