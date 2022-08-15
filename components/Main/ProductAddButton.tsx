import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import useLoginUser from 'hooks/useLoginUser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductAddButton = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const { id: userId, profileImage: profileImageUrl } = useLoginUser();

  // @TODO HOOK으로 개선 (BM-184 참고)
  useEffect(() => {
    if (userId !== -1) {
      setIsLogin(true);
    }
  }, [userId]);

  return (
    isLogin && (
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
    )
  );
};

export default ProductAddButton;
