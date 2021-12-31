import { IRouteComponentProps } from 'umi';
// 组件
import Login from '@/pages/login';
import BigScreen from '@/pages/echarts-explore/bigScreen';
import BaseLayout from './subpage/baseLayout';
// 方法
import { useLocation } from 'umi';
import BaseContext from '@/globalContext';
import { useGlobal } from '@/globalContext/hook';

export default function ({
  children,
  location,
  route,
  history,
  match,
  ...resprops
}: IRouteComponentProps) {
  // const [isLogin, setIslogin] = useState<boolean>(false);
  // const { isLogin } = useContext(BaseContext);
  const curLocation = useLocation();
  const allRoutes = route.routes;
  if (!allRoutes?.find((i) => i.path === location.pathname)) {
    return children;
  }
  if (curLocation.pathname)
    if (curLocation.pathname === '/echarts-explore/bigScreen') {
      // 数据大屏导航
      return <BigScreen />;
    }
  const { dispatch, routerTabs, isLogin } = useGlobal();
  return (
    <BaseContext.Provider value={{ isLogin, dispatch, routerTabs }}>
      {isLogin ? (
        <BaseLayout>{children}</BaseLayout>
      ) : (
        <Login>{children}</Login>
      )}
    </BaseContext.Provider>
  );
}
