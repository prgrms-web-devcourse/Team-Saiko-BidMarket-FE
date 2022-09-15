import { useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { User } from 'types/user';

export interface HandleAuthUserType {
  isAuthUser: boolean;
  authUser?: User;
}

interface UseLoginUserProps {
  handleAuthUser?: ({ isAuthUser, authUser }: HandleAuthUserType) => void;
  handleNotAuthUser?: () => void;
}

export const EMPTY_USERID = -1;

const useTempLoginUser = ({
  handleAuthUser,
  handleNotAuthUser,
}: UseLoginUserProps) => {
  const [isAuthFinished, setIsAuthFinished] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [authUser, setAuthUser] = useState<User>({
    id: EMPTY_USERID,
    username: '',
    profileImage: '',
  });

  useEffect(() => {
    if (!getItem('token')) {
      setIsAuthFinished(true);

      return;
    }

    setAuthUserInformation();
  }, []);

  const setAuthUserInformation = async () => {
    try {
      const { data } = await userAPI.getAuthUser();

      setAuthUser(data);
      setIsAuthUser(true);
    } catch (e) {
      console.error(e);

      setAuthUser({} as User);
    }

    setIsAuthFinished(true);
  };

  useEffect(() => {
    if (!isAuthFinished) {
      return;
    }

    if (!isAuthUser) {
      handleNotAuthUser && handleNotAuthUser();

      return;
    }

    handleAuthUser && handleAuthUser({ isAuthUser, authUser });
  }, [isAuthFinished, isAuthUser, setAuthUser, authUser]);

  return { authUser, isAuthUser, isAuthFinished };
};

export default useTempLoginUser;
