import { Center } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { userAPI } from 'apis';
import {
  GoBackIcon,
  Header,
  HeaderTitle,
  Loading,
  ProductCardContainer,
  SEO,
} from 'components/common';
import { NoProducts } from 'components/User';
import useGetInfiniteQuery from 'hooks/queries/useGetInfiniteQuery';
import useLoginUser from 'hooks/useLoginUser';
import { QUERY_KEYS } from 'utils';

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

const Like: NextPage = ({
  user: { id, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { isAuthFinished, authUser } = useLoginUser({
    handleAuthUser: ({ authUser }) => authUser?.id !== id && router.push('/'),
    handleNotAuthUser: () => router.push('/'),
  });
  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteQuery({ queryKey: QUERY_KEYS.USER_LIKE_PRODUCTS });
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages]);

  if (!isAuthFinished || authUser.id !== id) {
    return <Loading />;
  }

  return (
    <>
      <SEO title={`${username}의 판매한 상품`} />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="찜한 상품" />}
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
          <NoProducts pageName="userLikeProducts" />
        </Center>
      )}
    </>
  );
};

export default Like;
