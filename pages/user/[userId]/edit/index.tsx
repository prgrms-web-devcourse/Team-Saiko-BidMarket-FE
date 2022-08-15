import { Center, Flex, Spinner } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';
import { SEO } from 'components/common';
import { ProfileEditHeader } from 'components/ProfileEdit';
import EditProfileForm from 'components/ProfileEdit/EditForm';
import useLoginUser from 'hooks/useLoginUser';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
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

const Edit: NextPage = ({
  user: { id, profileImage, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { isAuthFinished, authUser } = useLoginUser({
    handleAuthUser: ({ authUser }) =>
      authUser?.id !== id && router.replace('/'),
    handleNotAuthUser: () => router.push('/'),
  });

  useEffect(() => {
    if (!id) {
      router.replace('/');
    }
  }, [id, router]);

  if (!isAuthFinished || authUser.id !== id) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <SEO title="프로필 수정" />
      <Flex flexDirection="column" width="100%" height="100%">
        <ProfileEditHeader />
        <Flex width="100%" height="100%" marginTop="48px">
          <EditProfileForm nickname={username} profileImageUrl={profileImage} />
        </Flex>
      </Flex>
    </>
  );
};

export default Edit;
