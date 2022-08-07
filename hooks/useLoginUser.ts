import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';

const useLoginUser = () => {
  const [authUserId, setAuthUserId] = useState<number | undefined>(-1);
  const [profileImage, setProfileImage] = useState<string | undefined>('');
  const [nickname, setNickname] = useState<string | undefined>('');

  useEffect(() => {
    setAuthUserInformation();
  }, []);

  const setAuthUserInformation = async () => {
    try {
      const { id, profileImage, username } = (await userAPI.getAuthUser()).data;

      setAuthUserId(id);
      setProfileImage(profileImage);
      setNickname(username);
    } catch (e) {
      console.error(e);

      setAuthUserId(undefined);
      setProfileImage(undefined);
      setNickname(undefined);
    }
  };

  return { authUserId, profileImage, nickname };
};

export default useLoginUser;
