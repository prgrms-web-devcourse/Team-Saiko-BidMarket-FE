import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import type { InferGetServerSidePropsType } from 'next';
import { Fragment, useState } from 'react';

import { productAPI } from 'apis';
import { Card, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';

export const getServerSideProps = async () => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 5 });
  return { props: { productsProp: data } };
};

const Home = ({
  productsProp,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [products, setProducts] = useState(productsProp);
  let offset = 0;
  const limit = 5;

  const handleMoreProductClick = async () => {
    offset = offset + 5;
    try {
      const { data } = await productAPI.getProducts({ offset, limit });
      setProducts([...products, ...data]);
    } catch (error) {
      offset = offset - 5;
      console.log(error);
    }
  };

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
        <Button
          alignSelf="center"
          w="100px"
          marginTop="20px"
          borderRadius="30px"
          color="white"
          backgroundColor="brand.primary-900"
        >
          <DownloadIcon w="5" h="5" onClick={() => handleMoreProductClick()} />
        </Button>
      </Flex>
      <Box alignSelf="flex-end" position="sticky" bottom="15px" right="15px">
        <ProductAddButton />
      </Box>
    </>
  );
};

export default Home;
