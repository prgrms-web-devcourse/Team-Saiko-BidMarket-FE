import { Flex, Image, Text } from '@chakra-ui/react';

const UserInfo = () => {
  return (
    <Flex gap="15px" alignItems="center">
      <Image
        w="90px"
        h="90px"
        src="/svg/basket.svg"
        alt={`image`}
        borderRadius="50%"
      />
      <Text fontSize="lg">물안경</Text>
    </Flex>
  );
};

export default UserInfo;
