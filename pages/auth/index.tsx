import { Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setItem } from 'apis/utils/storage';

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    const token =
      router.query.token || router.asPath.split('?')[1].substring(6);
    setItem('token', token as string);
    router.push('/');
  }, []);

  return (
    <Center height="100%">
      <Spinner size="xl" />
    </Center>
  );
};
export default Auth;
