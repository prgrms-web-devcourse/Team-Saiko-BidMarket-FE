import { Flex } from '@chakra-ui/react';

import NicknameInput from './NicknameInput';
import ProfileEditHeader from './ProfileEditHeader';
import ProfileImage from './ProfileImage';
import SubmitButton from './SubmitButton';

const ProfileEdit = () => {
  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <ProfileEditHeader />
      <Flex width="100%" height="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <ProfileImage />
          <NicknameInput />
          <SubmitButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileEdit;
