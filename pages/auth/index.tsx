import { Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { setItem } from 'apis/utils/storage';

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    setItem('token', router.query.token as string);
    router.push('/');
  }, []);

  return (
    <Center height="100%">
      <Spinner size="xl" />
    </Center>
  );
};
export default Auth;
