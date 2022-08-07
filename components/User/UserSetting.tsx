import { Flex, Img, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { removeItem } from 'apis/utils/storage';

const UserSetting = () => {
  const router = useRouter();

  return (
    <Flex flexDirection="column" width="100%" marginTop="21px" gap="19px">
      <Text
        textAlign="left"
        color="brand.dark"
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="700"
        fontSize="16px"
        lineHeight="128.19%"
      >
        계정 설정
      </Text>
      <Flex
        alignItems="center"
        gap="16px"
        cursor="pointer"
        onClick={() => {
          removeItem('token');
          router.push('/');
        }}
      >
        <Img src="/svg/logout.svg" />
        <Text>로그아웃</Text>
      </Flex>
    </Flex>
  );
};

export default UserSetting;
