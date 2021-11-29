import React, { useMemo, useState } from 'react';
import BaseLayout from './subpage/baseLayout';
import Login from './subpage/login';

export default function (props: any) {
  const [isLogin, setIslogin] = useState<boolean>(true);

  return isLogin ? (
    <BaseLayout>{props.children}</BaseLayout>
  ) : (
    <Login>{props.children}</Login>
  );
}
