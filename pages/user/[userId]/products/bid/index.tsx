import { Center, Spinner } from '@chakra-ui/react';
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
  ProductCardContainer,
  SEO,
} from 'components/common';
import { NoProducts } from 'components/User';
import { useGetUserBidProducts } from 'hooks/queries';
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

const Bid: NextPage = ({
  user: { id, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const userId = parseInt(id, 10);
  const { id: authUserId } = useLoginUser();
  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
  } = useGetUserBidProducts();
  const [ref, isView] = useInView();

  useEffect(() => {
    if (authUserId === -1) {
      return;
    }

    if (userId !== authUserId) {
      router.push('/');
      return;
    }
  }, [authUserId]);

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages]);

  // @TODO 토큰이 없는 경우 계속 Spinner 렌더링 현상 개선 필요
  // useLoginUser 내부에 토큰여부에 의해서든 API에 의해서든 업데이트 되었다는 신호가 필요
  // @TODO 페이지에 진입 후 판단하는 문제 존재
  // 따라서 찰나의 순간 목록이 렌더링된다 -> 불필요한 작업으로 성능 다운
  // cf) 토큰은 있지만 다른 회원인 경우 메인페이지로 이동
  if (authUserId === -1) {
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
          <NoProducts pageName="userBidProducts" />
        </Center>
      )}
    </>
  );
};

export default Bid;
