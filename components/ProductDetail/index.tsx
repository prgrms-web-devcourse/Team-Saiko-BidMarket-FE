import { StarIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex } from '@chakra-ui/react';

import ProductBid from './ProductBid';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import ProductSeller from './ProductSeller';

const ProductDetail = () => {
  return (
    <Flex direction="column">
      <ProductImage />
      <Flex justifyContent="space-between" alignItems="center">
        <ProductSeller />
        <StarIcon w="22px" color="brand.primary-900" />
      </Flex>
      <Divider />
      <ProductInfo />
      <Box
        position="fixed"
        bottom="0"
        right="0"
        left="0"
        width="100%"
        maxWidth="738px"
        margin="0 auto"
        padding="0 15px"
        z-index="10"
        backgroundColor="white"
      >
        <ProductBid />
      </Box>
    </Flex>
  );
};

export default ProductDetail;
