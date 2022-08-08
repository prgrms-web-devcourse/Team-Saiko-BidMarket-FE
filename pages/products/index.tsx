import { Divider, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

import {
  ProductCard,
  GoBackIcon,
  Header,
  SearchInput,
  SEO,
} from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { CardProductData } from 'types/product';

const DUMMY_DATA: Array<CardProductData> = [];

const Products: NextPage = () => {
  const [products, setProducts] = useState(DUMMY_DATA);
  return (
    <>
      <SEO title="검색" />
      <Header leftContent={<GoBackIcon />} middleContent={<Text>검색</Text>} />
      <SearchInput />
      <Divider marginTop="18px" />
      <Flex width="100%" gap="18px" marginTop="15px">
        <FilterButton filterName="sortFilter" />
        <FilterButton filterName="categoryFilter" />
      </Flex>
      <Flex width="100%" marginTop="15px">
        <BidFilterCheckBox />
      </Flex>
      {products.map((product) => {
        return (
          <Fragment key={product.id}>
            <ProductCard productInfo={product} />
            <Divider />
          </Fragment>
        );
      })}
    </>
  );
};

export default Products;
