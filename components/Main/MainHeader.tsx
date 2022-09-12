import { BellIcon, ChatIcon } from '@chakra-ui/icons';
import { Circle, Flex, Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Header } from 'components/common';
import { EMPTY_USERID } from 'hooks/useLoginUser';
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
        <ChakraImage
          src="/svg/bidmarket-logo.svg"
          alt="bidmarket logo"
          height="32px"
        />
      }
      // @TODO 컴포넌트로 분리 (BM-184 참고)
      rightContent={
        id !== EMPTY_USERID ? (
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
              position="relative"
              minW="32px"
              minH="32px"
              border="2px solid"
              borderColor="brand.primary-900"
              overflow="hidden"
              _hover={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${id}`)}
            >
              <Image
                src={profileImage}
                priority
                alt="프로필 이미지"
                layout="fill"
              />
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
