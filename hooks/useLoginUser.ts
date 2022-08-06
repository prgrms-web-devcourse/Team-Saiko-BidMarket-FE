import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';

const useLoginUser = () => {
  const [authUserId, setAuthUserId] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    setAuthUserInformation();
  }, []);

  const setAuthUserInformation = async () => {
    try {
      const { encodedId, thumbnailImg } = (await userAPI.getAuthUser()).data;

      setAuthUserId(encodedId);
      setProfileImage(thumbnailImg);
    } catch (e) {
      console.error(e);
    }
  };

  return { authUserId, profileImage };
};

export default useLoginUser;
