import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { removeItem } from 'apis/utils/storage';

const LogoutButton = () => {
  const router = useRouter();

  return (
    <Button
      border="1px"
      borderColor="brand.primary-900"
      backgroundColor="white"
      color="brand.primary-900"
      _hover={{ bg: 'brand.primary-100' }}
      onClick={() => {
        removeItem('token');
        router.reload();
      }}
    >
      로그아웃
    </Button>
  );
};

export default LogoutButton;
