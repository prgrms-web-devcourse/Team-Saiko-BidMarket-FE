import { BellIcon } from '@chakra-ui/icons';
import { Avatar, Circle, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import userAPI from 'apis/api/user';
import { getItem } from 'apis/utils/storage';
import { Header } from 'components/common';

import LoginButton from './LoginButton';

const MainHeader = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [userId, setUserId] = useState('');

  // @TODO HOOK으로 개선 (BM-184 참고)
  useEffect(() => {
    if (getItem('token')) {
      setLoginUserStatus();
    }
  }, []);

  const setLoginUserStatus = async () => {
    try {
      const { encodedId, thumbnailImg } = (await userAPI.getAuthUser()).data;

      setProfileImageUrl(thumbnailImg);
      setUserId(encodedId);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header
      leftContent={
        <Image src="/svg/bidMarket.svg" alt="bidmarket" height="20px" />
      }
      // @TODO 컴포넌트로 분리 (BM-184 참고)
      rightContent={
        isLogin ? (
          <Flex gap="10px" alignItems="center">
            <BellIcon w="32px" h="32px" _hover={{ cursor: 'pointer' }} />
            <Circle
              border="2px solid"
              borderColor="brand.primary-900"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${userId}`)}
            >
              <Avatar name="프로필 이미지" size="sm" src={profileImageUrl} />
            </Circle>
          </Flex>
        ) : (
          <LoginButton />
        )
      }
    ></Header>
  );
};

export default MainHeader;
