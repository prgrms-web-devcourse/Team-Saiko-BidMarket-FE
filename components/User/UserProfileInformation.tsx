import { Circle, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

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
      <Circle
        overflow="hidden"
        border="2px solid"
        borderColor="brand.primary-900"
      >
        <Image
          width="84px"
          height="84px"
          src={profileImageUrl}
          alt={`${nickname}-프로필이미지`}
        />
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
