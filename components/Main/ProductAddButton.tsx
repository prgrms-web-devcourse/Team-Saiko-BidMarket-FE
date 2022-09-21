import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import useLoginUser from 'hooks/useLoginUser';

const ProductAddButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  useLoginUser({
    handleAuthUser: ({ isAuthUser }) => setIsLogin(isAuthUser),
  });

  return (
    isLogin && (
      <Link href={'/product'}>
        <Button
          w="60px"
          h="60px"
          borderRadius="50px"
          backgroundColor="brand.primary-900"
          aria-label="product-add-button"
        >
          <AddIcon color="white" />
        </Button>
      </Link>
    )
  );
};

export default ProductAddButton;
