import { authInstance } from 'apis/utils/authInstance';
import { baseInstance } from 'apis/utils/baseInstance';
import { User } from 'types/user';

const userAPI = {
  getAuthUser: () => authInstance.get<User>('users/auth'),
  getUser: (id: number) => baseInstance.get<User>(`/users/${id}`),
  updateUser: (username: string, profileImage: string) =>
    authInstance.patch('users', { username, profileImage }),
};

export default userAPI;
