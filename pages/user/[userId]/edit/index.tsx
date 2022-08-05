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

const Edit: NextPage = ({
  user: { encodedId, thumbnailImg, username },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [authUserId, setAuthUserId] = useState('');

  useEffect(() => {
    if (!encodedId) {
      router.replace('/');

      return;
    }

    if (!authUserId) {
      return;
    }

    if (encodedId !== authUserId) {
      router.replace('/');

      return;
    }
  }, [encodedId, authUserId, router]);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const {
        data: { encodedId },
      } = await userAPI.getAuthUser();

      setAuthUserId(encodedId);
    };

    fetchAuthUser();
  }, []);

  if (!authUserId || authUserId !== encodedId) {
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
          <EditProfileForm nickname={username} profileImageUrl={thumbnailImg} />
        </Flex>
      </Flex>
    </>
  );
};

export default Edit;
