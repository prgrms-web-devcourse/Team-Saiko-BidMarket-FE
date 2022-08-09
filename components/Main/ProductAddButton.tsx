import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ProductAddButton = () => {
  const router = useRouter();

  return (
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
  );
};

export default ProductAddButton;
