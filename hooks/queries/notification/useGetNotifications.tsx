import { useInfiniteQuery } from '@tanstack/react-query';

import { notificationAPI } from 'apis';

// @TODO 공통로직 재사용되게 만들기
const LIMIT = 10;

const getNotificationsAPI = async ({ pageParam = 0 }) => {
  const { data } = await notificationAPI.getNotifications({
    offset: pageParam,
  });

  return {
    data,
    currentPage: pageParam,
    isLast: data.length ? false : true,
  };
};

const useGetNotifications = () => {
  return useInfiniteQuery(['notifications'], getNotificationsAPI, {
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) {
        return undefined;
      }

      return lastPage.currentPage + LIMIT;
    },
  });
};

export default useGetNotifications;
