import { Flex, Image, Text } from '@chakra-ui/react';

interface UserInfoProps {
  userInfo: {
    profileImage: string;
    username: string;
  };
}

const UserInfo = ({ userInfo }: UserInfoProps) => {
  const { profileImage, username } = userInfo;

  return (
    <Flex gap="15px" alignItems="center">
      <Image
        w="90px"
        h="90px"
        src={profileImage}
        alt={`${username}-프로필-이미지`}
        borderRadius="50%"
      />
      <Text fontSize="lg">{username}</Text>
    </Flex>
  );
};

export default UserInfo;
