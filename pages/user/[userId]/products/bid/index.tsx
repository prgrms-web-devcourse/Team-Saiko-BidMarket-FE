import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Center, Divider, Spinner } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  GoBackIcon,
  Header,
  HeaderTitle,
  ProductCard,
  ProductCardContainer,
  SEO,
} from 'components/common';
import { NoProducts } from 'components/User';
import { useGetUserBidProducts } from 'hooks/queries';
import useLoginUser from 'hooks/useLoginUser';

const Bid: NextPage = () => {
  const { id: authUserId, username } = useLoginUser();
  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
  } = useGetUserBidProducts();
  const [ref, isView] = useInView();

  useEffect(() => {
    console.log(authUserId);
    if (authUserId === -1) {
      return;
    }
  }, [authUserId]);

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages]);

  if (!authUserId) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <SEO title={username + '입찰한 상품'} />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="입찰한 상품" />}
      />
      {productPages?.pages.map(({ data }, pageIndex) => {
        return data.map((product, productIndex) => {
          const lastPageIndex = productPages.pages.length - 1;
          const lastProductIndex = data.length - 1;
          return lastPageIndex === pageIndex &&
            lastProductIndex === productIndex ? (
            <div ref={ref} key={product.id}>
              <ProductCardContainer product={product} />
            </div>
          ) : (
            <ProductCardContainer key={product.id} product={product} />
          );
        });
      })}
      {productPages?.pages[0].data.length === 0 && (
        <Center flexDirection="column" height="100%">
          <NoProducts pageName="userBidProducts" />
        </Center>
      )}
    </>
  );
};

export default Bid;
