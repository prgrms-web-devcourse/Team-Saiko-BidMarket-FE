import { Center, Spinner } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { GoBackIcon, Header, HeaderTitle } from 'components/common';
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
  const [ref, isView] = useInView();
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

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, notificationPages]);

  if (!authUserId || authUserId !== id) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="알림" />}
      />
      {/* @TODO 컴포넌트로 분리해보기 */}
      {notificationPages?.pages.map(({ data }, pageIndex) => {
        return data.map(
          (
            {
              id,
              productId,
              type,
              content,
              thumbnailImage,
              createdAt,
              checked,
            },
            notificationIndex
          ) => {
            const lastPageIndex = notificationPages.pages.length - 1;
            const lastNotificationIndex = data.length - 1;
            return lastPageIndex === pageIndex &&
              lastNotificationIndex === notificationIndex ? (
              <div ref={ref} key={id}>
                <NotificationCard
                  title={type}
                  description={content}
                  productId={productId}
                  productImage={thumbnailImage}
                  createdAt={createdAt}
                  checked={checked}
                />
              </div>
            ) : (
              <NotificationCard
                key={id}
                title={type}
                description={content}
                productId={productId}
                productImage={thumbnailImage}
                createdAt={createdAt}
                checked={checked}
              />
            );
          }
        );
      })}
      {notificationPages?.pages[0].data.length === 0 && (
        <Center flexDirection="column" height="100%">
          <NoNotifications />
        </Center>
      )}
    </>
  );
};

export default Notifications;
