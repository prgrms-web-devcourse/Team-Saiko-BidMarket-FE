import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { ProductCardContainer, SearchInput, SEO } from 'components/common';
import Loading from 'components/common/Loading';
import { Banner, MainHeader, ProductAddButton } from 'components/Main';
import useGetInfiniteQuery from 'hooks/queries/useGetInfiniteQuery';
import useLoginUser from 'hooks/useLoginUser';
import { QUERY_KEYS } from 'utils';

const Home: NextPage = () => {
  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteQuery({ queryKey: QUERY_KEYS.PRODUCTS });
  const [ref, isView] = useInView();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const { isAuthFinished, authUser } = useLoginUser({});

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages, fetchNextPage, hasNextPage]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/products?title=${title}`);
  };

  if (!isAuthFinished) {
    return <Loading />;
  }

  return (
    <>
      <SEO title="비드마켓" />
      <MainHeader authUser={authUser} />
      <Flex direction="column" width="100%">
        <Banner />
        <form onSubmit={handleFormSubmit}>
          <SearchInput keyword={title} onChange={setTitle} />
        </form>
        {productPages?.pages.map(({ data }, pageIndex) => {
          return data.map((product, productIndex) => {
            const lastPageIndex = productPages.pages.length - 1;
            const lastProductIndex = data.length - 1;
            const isLastProduct =
              lastPageIndex === pageIndex && lastProductIndex === productIndex;
            return isLastProduct ? (
              <div ref={ref} key={product.id}>
                <ProductCardContainer product={product} />
              </div>
            ) : (
              <ProductCardContainer key={product.id} product={product} />
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
