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
  const [userId, setUserId] = useState<number>();

  useEffect(() => {
    if (getItem('token')) {
      setLoginUserStatus();
    }
  }, []);

  const setLoginUserStatus = async () => {
    try {
      const { id, profileImage } = (await userAPI.getAuthUser()).data;

      setProfileImageUrl(profileImage);
      setUserId(Number(id));
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
      rightContent={
        isLogin ? (
          <Flex gap="10px" alignItems="center">
            <BellIcon
              w="32px"
              h="32px"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${userId}/notifications`)}
            />
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
