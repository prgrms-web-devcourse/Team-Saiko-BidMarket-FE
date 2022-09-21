import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href={'/login'}>
      <Button
        border="1px"
        borderColor="brand.primary-900"
        backgroundColor="white"
        color="brand.primary-900"
        _hover={{ bg: 'brand.primary-100' }}
      >
        로그인
      </Button>
    </Link>
  );
};

export default LoginButton;
