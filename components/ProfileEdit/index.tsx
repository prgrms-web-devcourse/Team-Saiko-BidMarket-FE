import { Center, Flex, Text } from '@chakra-ui/react';
import ProfileEditHeader from './ProfileEditHeader';
import ProfileImage from './ProfileImage';
import NicknameInput from './NicknameInput';

const ProfileEdit = () => {
  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <ProfileEditHeader />
      <Flex width="100%" height="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <ProfileImage />
          <NicknameInput />
          <Center
            flexShrink="0"
            justifySelf="flex-end"
            width="100%"
            height="57px"
            backgroundColor="#FF4370"
            cursor="pointer"
          >
            <Text
              fontFamily="Roboto"
              fontStyle="normal"
              fontSize="17px"
              fontWeight="400px"
              lineHeight="20px"
              color="white"
            >
              완료
            </Text>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileEdit;
