import { Box, Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment } from 'react';

import { Card, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';

const Home: NextPage = () => {
  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader />
      <Flex direction="column" width="100%">
        <Banner />
        <Divider marginTop="15px" />
        <SearchInput />
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
      </Flex>
      <Box alignSelf="flex-end" position="sticky" bottom="15px" right="15px">
        <ProductAddButton />
      </Box>
    </>
  );
};

export default Home;
