import { useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { User } from 'types/user';

const useLoginUser = () => {
  const [userInfo, setUserInfo] = useState<User>({
    id: -1,
    username: '',
    profileImage: '',
  });

  useEffect(() => {
    if (!getItem('token')) {
      return;
    }

    setAuthUserInformation();
  }, []);

  const setAuthUserInformation = async () => {
    try {
      const { data } = await userAPI.getAuthUser();
      setUserInfo(data);
    } catch (e) {
      console.error(e);

      setUserInfo({} as User);
    }
  };

  return { ...userInfo };
};

export default useLoginUser;
