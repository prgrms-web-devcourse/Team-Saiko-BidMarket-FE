import { StarIcon } from '@chakra-ui/icons';
import { Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { SEO } from 'components/common';
import {
  ProductBid,
  ProductImage,
  ProductInfo,
  ProductSeller,
} from 'components/ProductDetail';

const ProductDetail: NextPage = () => {
  return (
    <>
      <SEO title="상세 상품 중고 거래 이름" />
      <Flex direction="column">
        <ProductImage />
        <Flex justifyContent="space-between" alignItems="center">
          <ProductSeller />
          <StarIcon w="22px" color="brand.primary-900" />
        </Flex>
        <Divider />
        <ProductInfo />
        <ProductBid />
      </Flex>
    </>
  );
};

export default ProductDetail;
