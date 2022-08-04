import { Center, Divider, Flex, Spinner, Text } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';
import { GoBackIcon, Header, SEO, SideBar } from 'components/common';
import {
  ProductMenuList,
  UserProfileEditButton,
  UserProfileInformation,
} from 'components/User';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  let user = {};

  try {
    const { data } = await userAPI.getUser(userId as string);

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
  user: { encodedId, thumbnailImg, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { userId } = router.query;
  const [authUserId, setAuthUserId] = useState('');
  const isMyPage = encodedId === authUserId;

  useEffect(() => {
    if (!encodedId) {
      router.replace('/404');
    }
  }, [encodedId, router]);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const {
        data: { encodedId },
      } = await userAPI.getAuthUser();

      setAuthUserId(encodedId);
    };

    fetchAuthUser();
  }, []);

  if (!encodedId) {
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
        middleContent={
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="bold"
            lineHeight="23px"
            fontStyle="normal"
            color="barnd.dark"
          >
            {isMyPage ? '마이페이지' : username}
          </Text>
        }
        rightContent={<SideBar />}
      ></Header>
      <Flex width="100%" flexDirection="column" gap="29px">
        <UserProfileInformation
          profileImageUrl={thumbnailImg}
          nickname={username}
        />
        {isMyPage ? (
          <UserProfileEditButton
            onClick={() => router.push(`./${userId}/edit`)}
          />
        ) : undefined}
      </Flex>
      <Divider height="7px" marginTop="27px" backgroundColor="#F2F2F2" />
      <ProductMenuList userId={userId as string} />
    </>
  );
};

export default UserId;
