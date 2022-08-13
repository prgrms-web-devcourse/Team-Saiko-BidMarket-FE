import { Center, Divider, Flex, Spinner, Text } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { userAPI } from 'apis';
import { removeItem } from 'apis/utils/storage';
import { GoBackIcon, Header, SEO } from 'components/common';
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

const Setting: NextPage = ({
  user: { id },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { userId } = router.query;
  const { id: authUserId } = useLoginUser();
  const isMyPage = id === authUserId;
  // @TODO 회원탈퇴 구현 예정

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
      <SEO title="회원 설정 페이지" />
      <Header leftContent={<GoBackIcon />} />
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        h="85%"
      >
        <Flex width="100%" direction="column">
          <Text
            fontSize="16px"
            margin="16px 0"
            cursor="pointer"
            onClick={() => {
              removeItem('token');
              router.push('/');
            }}
          >
            로그아웃
          </Text>
          <Divider />
        </Flex>
        <Text
          color="#A6A6A6"
          fontSize="14px"
          textDecoration="underline"
          cursor="pointer"
        >
          회원탈퇴
        </Text>
      </Flex>
    </>
  );
};

export default Setting;
