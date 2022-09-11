import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import { Avatar, Circle, Flex, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Header } from 'components/common';
import { User } from 'types/user';

import LoginButton from './LoginButton';

interface MainHeaderProps {
  authUser: User;
}

const MainHeader = ({ authUser: { id, profileImage } }: MainHeaderProps) => {
  const router = useRouter();

  return (
    <Header
      leftContent={
        <Image
          src="/svg/bidmarket-logo.svg"
          alt="bidmarket logo"
          height="32px"
        />
      }
      // @TODO 컴포넌트로 분리 (BM-184 참고)
      rightContent={
        id !== -1 ? (
          <Flex gap="10px" alignItems="center">
            <ChatIcon
              w="24px"
              h="24px"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${id}/chat`)}
            />
            <BellIcon
              w="32px"
              h="32px"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${id}/notifications`)}
            />
            <Circle
              border="2px solid"
              borderColor="brand.primary-900"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${id}`)}
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
