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
  UserProfileEditButton,
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

  return (
    <>
      <SEO title="회원 정보 페이지" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title={isMyPage ? '마이페이지' : ''} />}
      />
      <Flex width="100%" flexDirection="column" gap="29px">
        <UserProfileInformation
          profileImageUrl={profileImage}
          nickname={username}
        />
        {isMyPage ? (
          <UserProfileEditButton
            text={'edit'}
            onClick={() => router.push(`./${userId}/edit`)}
          />
        ) : (
          <UserProfileEditButton
            text={'report'}
            // @NOTE 신고하기 페이지로 이동으로 코드 변경 매우 필요
            onClick={() => router.push(`./${userId}/edit`)}
          />
        )}
      </Flex>
      <ProductMenuList userId={userId as string} />
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
