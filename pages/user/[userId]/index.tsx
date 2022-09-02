import { Divider, Flex } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';
import {
  GoBackIcon,
  Header,
  HeaderTitle,
  Loading,
  SEO,
} from 'components/common';
import {
  ProductMenuList,
  UserProfileEditOrReportButton,
  UserProfileInformation,
  UserSetting,
} from 'components/User';
import useLoginUser from 'hooks/useLoginUser';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  let user = {};

  try {
    const { data } = await userAPI.getUser(parseInt(userId as string, 10));

    user = data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
    },
  };
};

const UserId: NextPage = ({
  user: { id, profileImage, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [isMyPage, setIsMyPage] = useState(false);
  const { authUser, isAuthFinished } = useLoginUser({
    handleAuthUser: ({ authUser }) => {
      setIsMyPage(authUser?.id === id);
    },
  });

  /**
   * url 기준으로 SSR에서 user 정보를 prop으로 받아옴.
   * id가 없다면 잘못된 url
   */
  useEffect(() => {
    if (!id) {
      router.replace('/404');
    }
  }, [id, router]);

  if (!isAuthFinished || !id) {
    return <Loading />;
  }

  const handleReportsButtonClick = () => {
    router.push(
      {
        pathname: `/reports`,
        query: {
          userId: authUser.id,
          profileImage,
          username,
        },
      },
      '/reports'
    );
  };

  return (
    <>
      <SEO title="회원 정보 페이지" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <HeaderTitle title={isMyPage ? '마이페이지' : '회원 정보'} />
        }
      />
      <Flex width="100%" flexDirection="column" gap="29px">
        <UserProfileInformation
          profileImageUrl={profileImage}
          nickname={username}
        />
        {isMyPage ? (
          <UserProfileEditOrReportButton
            text={'edit'}
            onClick={() => router.push(`./${authUser.id}/edit`)}
          />
        ) : (
          <UserProfileEditOrReportButton
            text={'report'}
            onClick={handleReportsButtonClick}
          />
        )}
      </Flex>
      <ProductMenuList userId={id} isMyPage={isMyPage} />
      {isMyPage ? (
        <>
          <Divider
            width="100%"
            height="7px"
            background="#F8F8F8"
            boxShadow="inset 0px 1px 3px rgba(0, 0, 0, 0.03)"
            marginTop="25px"
          />
          <UserSetting userId={authUser.id} />
        </>
      ) : undefined}
    </>
  );
};

export default UserId;
