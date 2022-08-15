import { Center, Spinner } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { userAPI } from 'apis';
import {
  GoBackIcon,
  Header,
  HeaderTitle,
  ProductCardContainer,
  SEO,
} from 'components/common';
import { NoProducts } from 'components/User';
import { useGetUserSellProducts } from 'hooks/queries';
import useLoginUser from 'hooks/useLoginUser';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { userId } = query;
  let user = {};

  try {
    user = (await userAPI.getUser(parseInt(userId as string, 10))).data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
    },
  };
};

const Sell: NextPage = ({
  user: { id, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isMyPage, setIsMyPage] = useState(false);
  const userId = parseInt(id, 10);
  const { isAuthFinished } = useLoginUser({
    handleAuthUser: ({ authUser }) => authUser?.id === id && setIsMyPage(true),
  });

  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
  } = useGetUserSellProducts({ userId });
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages]);

  if (!isAuthFinished) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <SEO title={`${username}의 판매한 상품`} />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="판매한 상품" />}
      />
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
      {productPages?.pages[0].data.length === 0 && (
        <Center flexDirection="column" height="100%">
          {isMyPage ? (
            <NoProducts pageName="userSellProducts" />
          ) : (
            <NoProducts pageName="userSellProductsOther" />
          )}
        </Center>
      )}
    </>
  );
};

export default Sell;
