import { Center, Spinner } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { userAPI } from 'apis';
import { GoBackIcon, Header, HeaderTitle, Loading } from 'components/common';
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
  const { isAuthFinished, authUser } = useLoginUser({
    handleAuthUser: ({ authUser }) => authUser?.id !== id && router.push('/'),
    handleNotAuthUser: () => router.push('/'),
  });

  useEffect(() => {
    if (!id) {
      router.push('/');

      return;
    }
  }, [id, router]);

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, notificationPages]);

  if (!isAuthFinished || authUser.id !== id) {
    return <Loading />;
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
            const isLastNotification =
              lastPageIndex === pageIndex &&
              lastNotificationIndex === notificationIndex;
            return isLastNotification ? (
              <div ref={ref} key={id}>
                <NotificationCard
                  id={id}
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
                id={id}
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
