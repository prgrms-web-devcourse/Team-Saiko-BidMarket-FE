import { authInstance } from 'apis/utils/authInstance';
import { NotificationsResponseType } from 'types/notification';

const notificationAPI = {
  getNotifications: ({ offset }: { offset: number }) =>
    authInstance.get<NotificationsResponseType>(
      `/notifications?offset=${offset}&limit=10`
    ),
};

export default notificationAPI;
