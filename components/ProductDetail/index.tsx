import { StarIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex } from '@chakra-ui/react';

import ProductBid from './ProductBid';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductSeller from './ProductSeller';

const ProductDetail = () => {
  return (
    <Flex direction="column" width="100%">
      <ProductImage />
      <Box h="7px" backgroundColor="#E2E2E2" />
      <Flex justifyContent="space-between" alignItems="center">
        <ProductSeller />
        <StarIcon w="22px" color="brand.primary-900" />
      </Flex>
      <Divider />
      <ProductInfo />
      <ProductBid />
    </Flex>
  );
};

export default ProductDetail;
