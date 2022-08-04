import { Divider, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment } from 'react';

import { Card, GoBackIcon, Header, SearchInput, SEO } from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';

const Products: NextPage = () => {
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
      {Array(10)
        .fill(1)
        .map((_, index) => {
          return (
            <Fragment key={index}>
              <Card productId={index} />
              <Divider />
            </Fragment>
          );
        })}
    </>
  );
};

export default Products;
