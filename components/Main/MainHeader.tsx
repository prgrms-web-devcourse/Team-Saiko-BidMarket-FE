import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import { Avatar, Circle, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Header } from 'components/common';
import useLoginUser from 'hooks/useLoginUser';

import LoginButton from './LoginButton';

const MainHeader = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const { id: userId, profileImage: profileImageUrl } = useLoginUser();

  // @TODO HOOK으로 개선 (BM-184 참고)
  useEffect(() => {
    if (userId !== -1) {
      setIsLogin(true);
    }
  }, [userId]);

  return (
    <Header
      leftContent={
        <Image src="/svg/bimadrket-logo.svg" alt="bidmarket" height="32px" />
      }
      // @TODO 컴포넌트로 분리 (BM-184 참고)
      rightContent={
        isLogin ? (
          <Flex gap="10px" alignItems="center">
            <ChatIcon
              w="24px"
              h="24px"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${userId}/chat`)}
            />
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
