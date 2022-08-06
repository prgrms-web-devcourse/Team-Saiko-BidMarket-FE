import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';

const useLoginUser = () => {
  const [authUserId, setAuthUserId] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    setAuthUserInformation();
  }, []);

  const setAuthUserInformation = async () => {
    try {
      const { encodedId, thumbnailImg, username } = (
        await userAPI.getAuthUser()
      ).data;

      setAuthUserId(encodedId);
      setProfileImage(thumbnailImg);
      setNickname(username);
    } catch (e) {
      console.error(e);
    }
  };

  return { authUserId, profileImage, nickname };
};

export default useLoginUser;
