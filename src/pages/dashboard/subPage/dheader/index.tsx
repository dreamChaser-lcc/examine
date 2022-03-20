import { PageHeader } from 'antd';
import moment from 'moment';
import { FC, memo, useEffect, useRef, useState } from 'react';

interface IDHeader {}
const DHeader: FC<IDHeader> = () => {
  const timerRef = useRef<any>();
  const [curDate, setCurDate] = useState<string>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const cur = new Date().getTime();
      const curDate = moment(cur).format('YYYY-MM-DD HH:mm:ss');
      setCurDate(curDate);
    });
    return () => {
      clearInterval(timerRef.current);
    };
  });

  return (
    <PageHeader
      className="site-page-header"
      backIcon={false}
      title={
        <>
          <h1>Welcome to my space,Lcc</h1>
          <h5>{curDate}</h5>
        </>
      }
      // subTitle={curDate}
      extra={'当前页面仅实现UI,使用Fake数据'}
    />
  );
};

export default memo(DHeader);
