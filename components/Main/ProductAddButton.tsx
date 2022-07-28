import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const ProductAddButton = () => {
  return (
    <Button
      w="60px"
      h="60px"
      borderRadius="50px"
      backgroundColor="brand.primary-900"
      aria-label="product-add-button"
    >
      <AddIcon color="white" />
    </Button>
  );
};

export default ProductAddButton;
