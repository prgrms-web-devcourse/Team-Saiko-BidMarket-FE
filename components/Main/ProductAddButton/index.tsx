import { AddIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const ProductAddButton = () => {
  return (
    <Button
      position="fixed"
      bottom="15px"
      right="15px"
      w="60px"
      h="60px"
      borderRadius="50px"
      backgroundColor="#FF4370"
    >
      <AddIcon color="white" />
    </Button>
  );
};

export default ProductAddButton;
