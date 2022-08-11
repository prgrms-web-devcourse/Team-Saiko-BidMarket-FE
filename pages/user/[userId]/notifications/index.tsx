import { Center, Spinner, Text } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { notificationAPI, userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { GoBackIcon, Header } from 'components/common';
import { NoNotifications, NotificationCard } from 'components/User';
import useLoginUser from 'hooks/useLoginUser';
import { NotificationsResponseType } from 'types/notification';

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
  const router = useRouter();
  const { id: authUserId } = useLoginUser();
  const [notifications, setNotifications] = useState<NotificationsResponseType>(
    []
  );

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

    getNotifications();
  }, [id, authUserId, router]);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  const getNotifications = async () => {
    const newNotifications = (
      await notificationAPI.getNotifications({ offset: 0 })
    ).data;
    setNotifications([...notifications, ...newNotifications]);
  };

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
      {notifications.length ? (
        notifications.map(
          ({ id, productId, type, content, thumbnailImage, createdAt }) => (
            <NotificationCard
              key={id}
              title={type}
              description={content}
              productId={productId}
              productImage={thumbnailImage}
              createdAt={createdAt}
            />
          )
        )
      ) : (
        <Center flexDirection="column" height="100%">
          <NoNotifications />
        </Center>
      )}
    </>
  );
};

export default Notifications;
