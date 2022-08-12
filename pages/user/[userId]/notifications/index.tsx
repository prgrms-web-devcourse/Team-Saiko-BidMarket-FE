import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Center, Spinner, Text } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { GoBackIcon, Header } from 'components/common';
import { NoNotifications, NotificationCard } from 'components/User';
import { useGetNotifications } from 'hooks/queries';
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

const Notifications = ({
  user: { id },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    data: notificationPages,
    fetchNextPage,
    hasNextPage,
  } = useGetNotifications();
  const router = useRouter();
  const { id: authUserId } = useLoginUser();

  // @TODO 인증하는 부분 분리하기 (반복되는 코드)
  useEffect(() => {
    if (!getItem('token')) {
      router.replace('/');
      return;
    }

    if (authUserId === -1) {
      return;
    }

    if (!id || id !== authUserId) {
      router.replace('/');

      return;
    }
  }, [id, authUserId, router]);

  if (!authUserId || authUserId !== id) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Header leftContent={<GoBackIcon />} middleContent={<Text>알림</Text>} />
      {notificationPages?.pages.map(({ data }) => {
        return data.map(
          ({ id, productId, type, content, thumbnailImage, createdAt }) => {
            return (
              <NotificationCard
                key={id}
                title={type}
                description={content}
                productId={productId}
                productImage={thumbnailImage}
                createdAt={createdAt}
              />
            );
          }
        );
      })}
      {hasNextPage ? (
        <Button
          alignSelf="center"
          w="100px"
          marginTop="20px"
          borderRadius="30px"
          color="white"
          backgroundColor="brand.primary-900"
          onClick={() => fetchNextPage()}
        >
          <DownloadIcon w="5" h="5" />
        </Button>
      ) : (
        <Center flexDirection="column" height="100%">
          <NoNotifications />
        </Center>
      )}
    </>
  );
};

export default Notifications;
