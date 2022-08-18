import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import { Avatar, Center, Circle, Flex, Image, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Header } from 'components/common';
import useLoginUser from 'hooks/useLoginUser';

import LoginButton from './LoginButton';

const MainHeader = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const {
    isAuthFinished,
    isAuthUser,
    authUser: { id: userId, profileImage },
  } = useLoginUser({
    handleAuthUser: ({ isAuthUser }) => setIsLogin(isAuthUser),
  });

  if (!isAuthFinished || isAuthUser !== isLogin) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Header
      leftContent={
        <Image
          src="/svg/bidmarket-logo.svg"
          alt="bidmarket logo"
          w="32px"
          h="32px"
        />
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
              <Avatar name="프로필 이미지" size="sm" src={profileImage} />
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
