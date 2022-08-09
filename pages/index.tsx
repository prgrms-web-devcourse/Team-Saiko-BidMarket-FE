import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ProductCardContainer, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';
import { useGetProducts } from 'hooks/queries';

const Home: NextPage = () => {
  const { data: productPages, fetchNextPage, hasNextPage } = useGetProducts();
  const router = useRouter();
  const [title, setTitle] = useState('');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(
      `/products?title=${title}&sort=END_DATE_ASC&category=ALL&progressed=true&offset=0&limit=10`
    );
  };

  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader />
      <Flex direction="column" width="100%">
        <Banner />
        <Divider marginTop="15px" />
        <form onSubmit={handleFormSubmit}>
          <SearchInput keyword={title} onChange={setTitle} />
        </form>
        {productPages?.pages.map(({ data }) => {
          return data.map((product) => {
            return <ProductCardContainer key={product.id} product={product} />;
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
