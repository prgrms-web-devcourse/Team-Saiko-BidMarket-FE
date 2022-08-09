import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment } from 'react';

import { ProductCard, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';
import { useGetProducts } from 'hooks/queries';

const Home: NextPage = () => {
  const { data: productPages, fetchNextPage, hasNextPage } = useGetProducts();

  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader />
      <Flex direction="column" width="100%">
        <Banner />
        <Divider marginTop="15px" />
        <SearchInput />
        {productPages?.pages.map((page) => {
          return page.data.map((product) => {
            return (
              <Fragment key={product.id}>
                <ProductCard productInfo={product} />
                <Divider />
              </Fragment>
            );
          });
        })}
        {hasNextPage && (
          <Button
            alignSelf="center"
            w="100px"
            marginTop="20px"
            borderRadius="30px"
            color="white"
            backgroundColor="brand.primary-900"
            onClick={() => fetchNextPage()}
          >
            <DownloadIcon w="5" h="5" />
          </Button>
        )}
      </Flex>
      <Box alignSelf="flex-end" position="sticky" bottom="15px" right="15px">
        <ProductAddButton />
      </Box>
    </>
  );
};

export default Home;
