import { Avatar, Circle, Flex, Text } from '@chakra-ui/react';

interface UserInformationProps {
  profileImageUrl: string;
  nickname: string;
}

const UserProfileInformation = ({
  profileImageUrl,
  nickname,
}: UserInformationProps) => {
  return (
    <Flex width="100%" gap="20px" alignItems="center" marginTop="12px">
      <Circle border="2px solid" borderColor="brand.primary-900">
        <Avatar name="프로필 이미지" size="xl" src={profileImageUrl} />
      </Circle>
      <Text
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="400"
        fontSize="20"
      >
        {nickname}
      </Text>
    </Flex>
  );
};

export default UserProfileInformation;
