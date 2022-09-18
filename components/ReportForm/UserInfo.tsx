import { Circle, Flex, Image, Text } from '@chakra-ui/react';

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
      <Circle overflow="hidden" maxW="90px" maxH="90px">
        <Image
          width="90px"
          height="90px"
          src={profileImage}
          alt={`${username}-프로필-이미지`}
        />
      </Circle>
      <Text fontSize="lg">{username}</Text>
    </Flex>
  );
};

export default UserInfo;
