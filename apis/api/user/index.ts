import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { User } from 'types/user';

const userAPI = {
  getAuthUser: () => authInstance.get<User>('users/auth'),
  getUser: (encodedId: string) => baseInstance.get<User>(`/users/${encodedId}`),
  updateUser: (username: string, profileImageUrl: string) =>
    authInstance.patch('users', { username, profileImageUrl }),
};

export default userAPI;
