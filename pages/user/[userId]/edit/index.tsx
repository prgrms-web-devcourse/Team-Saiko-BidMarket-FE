import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import {
  NicknameInput,
  ProfileEditHeader,
  ProfileImage,
  SubmitButton,
} from 'components/ProfileEdit';

const Edit: NextPage = () => {
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

export default Edit;
