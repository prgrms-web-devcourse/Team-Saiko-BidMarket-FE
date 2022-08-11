import { Box, Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { ProductCard, SearchInput, SEO } from 'components/common';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';
import { useGetProducts } from 'hooks/queries';

const Home: NextPage = () => {
  const { data: productPages, fetchNextPage, hasNextPage } = useGetProducts();
  const [ref, isView] = useInView();
  const router = useRouter();
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages]);

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
        <form onSubmit={handleFormSubmit}>
          <SearchInput keyword={title} onChange={setTitle} />
        </form>
        {productPages?.pages.map(({ data }, pageIndex) => {
          return data.map((product, productIndex) => {
            const lastPageIndex = productPages.pages.length - 1;
            const lastProductIndex = data.length - 1;
            return (
              <Fragment key={product.id}>
                {lastPageIndex === pageIndex &&
                lastProductIndex === productIndex ? (
                  <div ref={ref}>
                    <ProductCard productInfo={product} />
                  </div>
                ) : (
                  <ProductCard productInfo={product} />
                )}
                <Divider />
              </Fragment>
            );
          });
        })}
      </Flex>
      <Box alignSelf="flex-end" position="sticky" bottom="15px" right="15px">
        <ProductAddButton />
      </Box>
    </>
  );
};

export default Home;
