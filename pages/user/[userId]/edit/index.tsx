import { Center, Flex, Spinner } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import userAPI from 'apis/api/user';
import { SEO } from 'components/common';
import { ProfileEditHeader } from 'components/ProfileEdit';
import EditProfileForm from 'components/ProfileEdit/EditForm';
import useLoginUser from 'hooks/useLoginUser';

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
  const { authUserId } = useLoginUser();

  useEffect(() => {
    if (!authUserId) {
      return;
    }

    if (!encodedId || encodedId !== authUserId) {
      router.replace('/');

      return;
    }
  }, [encodedId, authUserId, router]);

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
