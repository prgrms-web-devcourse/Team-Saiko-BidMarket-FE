import { Flex } from '@chakra-ui/react';

import AddProductMinimumPrice from './AddProductMinimumPrice';
import AddProductTitle from './AddProductTitle';
import AddProductImages from './AddProductImages';
import AddProductDescription from './AddProductDescription';
import AddProductSales from './AddProductSales';

const CreateProduct = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingLeft="15px"
      paddingRight="15px"
      gap="20px"
      marginTop="20px"
      w="100%"
    >
      <AddProductImages />
      <AddProductTitle />
      <AddProductMinimumPrice />
      <AddProductSales />
      <AddProductDescription />
    </Flex>
  );
};

export default CreateProduct;
