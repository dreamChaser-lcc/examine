import imgeurl from '@/assets/images/404.gif';
export default () => {
  return (
    <div id="404-wapaper">
      <div style={{ width: '200px', height: '300px', margin: '0 auto' }}>
        <div>
          404 <img src={imgeurl} alt="404" />
        </div>
      </div>
    </div>
  );
};
