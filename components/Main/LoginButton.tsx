import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const LoginButton = () => {
  const router = useRouter();

  return (
    <Button
      border="1px"
      borderColor="brand.primary-900"
      backgroundColor="white"
      color="brand.primary-900"
      _hover={{ bg: 'brand.primary-100' }}
      onClick={() => router.push('/login')}
    >
      로그인
    </Button>
  );
};

export default LoginButton;
