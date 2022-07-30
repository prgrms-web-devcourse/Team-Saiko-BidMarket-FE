import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { ProfileEditHeader } from 'components/ProfileEdit';
import EditProfileForm from 'components/ProfileEdit/EditForm';

const Edit: NextPage = () => {
  const dummyProps = {
    nickname: '물안경',
    profileImageUrl: 'https://bit.ly/code-beast',
  };

  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <ProfileEditHeader />
      <Flex width="100%" height="100%" marginTop="48px">
        <EditProfileForm {...dummyProps} />
      </Flex>
    </Flex>
  );
};

export default Edit;
