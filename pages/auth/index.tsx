import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setItem } from 'apis/utils/storage';
import { Loading } from 'components/common';

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    const token =
      router.query.token || router.asPath.split('?')[1].substring(6);
    setItem('token', token as string);
    router.push('/');
  }, []);

  return <Loading />;
};
export default Auth;
