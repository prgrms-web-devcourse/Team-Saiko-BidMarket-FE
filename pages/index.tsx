import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import type { InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

import { productAPI } from 'apis';
import { Card, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';

let offset = 0;
const limit = 5;
export const getServerSideProps = async () => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 5 });
  return { props: { productsProps: data } };
};

const Home = ({
  productsProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, setTitle] = useState('');

  const [products, setProducts] = useState(productsProps);
  const [isMoreButtonLoading, setIsMoreButtonLoading] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(
      `/products?title=${title}&sort=END_DATE_ASC&category=ALL&progressed=true&offset=0&limit=10`
    );
  };

  const handleMoreProductClick = async () => {
    setIsMoreButtonLoading(true);
    offset = offset + 1;
    try {
      const { data } = await productAPI.getProducts({ offset, limit });
      setProducts([...products, ...data]);
      setIsMoreButtonLoading(false);
    } catch (error) {
      offset = offset - 1;
      console.log(error);
      setIsMoreButtonLoading(false);
    }
  };

  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader />
      <Flex direction="column" width="100%">
        <Banner />
        <Divider marginTop="15px" />
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <SearchInput keyword={title} onChange={setTitle} />
        </form>
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
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
          isLoading={isMoreButtonLoading}
          onClick={() => handleMoreProductClick()}
        >
          <DownloadIcon w="5" h="5" />
        </Button>
      </Flex>
      <Box alignSelf="flex-end" position="sticky" bottom="15px" right="15px">
        <ProductAddButton />
      </Box>
    </>
  );
};

export default Home;
