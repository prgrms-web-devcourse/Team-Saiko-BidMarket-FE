import { useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { User } from 'types/user';

export interface HandleAuthUserType {
  isAuthUser: boolean;
  authUser?: User;
}

interface UseTempLoginUserProps {
  handleAuthUser?: ({ isAuthUser, authUser }: HandleAuthUserType) => void;
  handleNotAuthUser?: () => void;
}

const useTempLoginUser = ({
  handleAuthUser,
  handleNotAuthUser,
}: UseTempLoginUserProps) => {
  const [isAuthFinished, setIsAuthFinished] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [authUser, setAuthUser] = useState<User>({
    id: -1,
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
  }, [
    isAuthFinished,
    isAuthUser,
    setAuthUser,
    handleAuthUser,
    handleNotAuthUser,
    authUser,
  ]);

  return { authUser, isAuthUser, isAuthFinished };
};

export default useTempLoginUser;
