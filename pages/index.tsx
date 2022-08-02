import { Box, Divider, Flex } from '@chakra-ui/react';
import type { InferGetServerSidePropsType } from 'next';
import { Fragment } from 'react';

import { productAPI } from 'apis';
import { Card, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';

export const getServerSideProps = async () => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 5 });
  return { props: { products: data } };
};

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader />
      <Flex direction="column" width="100%">
        <Banner />
        <Divider marginTop="15px" />
        <SearchInput />
        {products.map((product, index) => {
          return (
            <Fragment key={index}>
              <Card productInfo={product} />
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
