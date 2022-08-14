import { Center, Divider, Flex, Spinner } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import userAPI from 'apis/api/user';
import { GoBackIcon, Header, HeaderTitle, SEO } from 'components/common';
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
  const { userId } = router.query;
  const { id: authUserId } = useLoginUser();
  const isMyPage = id === authUserId;

  useEffect(() => {
    if (!id) {
      router.replace('/404');
    }
  }, [id, router]);

  if (!id) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  const handleReportsButtonClick = () => {
    router.push(
      {
        pathname: `/reports`,
        query: {
          userId: authUserId,
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
            onClick={() => router.push(`./${userId}/edit`)}
          />
        ) : (
          <UserProfileEditOrReportButton
            text={'report'}
            onClick={handleReportsButtonClick}
          />
        )}
      </Flex>
      <ProductMenuList userId={userId as string} isMyPage={isMyPage} />
      {isMyPage ? (
        <>
          <Divider
            width="100%"
            height="7px"
            background="#F8F8F8"
            boxShadow="inset 0px 1px 3px rgba(0, 0, 0, 0.03)"
            marginTop="25px"
          />
          <UserSetting userId={authUserId} />
        </>
      ) : undefined}
    </>
  );
};

export default UserId;
