import { Button } from 'antd';
import { history } from 'umi';
import imgeurl from '@/assets/images/404.gif';

export default () => {
  return (
    <div id="404-wapaper">
      <div style={{ width: '200px', height: '300px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <h1> 404</h1>
            <h1>页面找不到</h1>
          </div>
          <img src={imgeurl} alt="404" />
        </div>
        <footer>
          <Button
            type="link"
            onClick={() => {
              history?.push('/');
            }}
          >
            回到首页
          </Button>
        </footer>
      </div>
    </div>
  );
};
