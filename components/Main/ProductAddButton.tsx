import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import useLoginUser from 'hooks/useLoginUser';

const ProductAddButton = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useLoginUser({
    handleAuthUser: ({ isAuthUser }) => setIsLogin(isAuthUser),
  });

  return isLogin ? (
    <Button
      w="60px"
      h="60px"
      borderRadius="50px"
      backgroundColor="brand.primary-900"
      aria-label="product-add-button"
      onClick={() => router.push('/product')}
    >
      <AddIcon color="white" />
    </Button>
  ) : (
    <></>
  );
};

export default ProductAddButton;
