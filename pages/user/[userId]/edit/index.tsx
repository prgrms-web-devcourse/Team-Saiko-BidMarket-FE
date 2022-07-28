import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import {
  NicknameInput,
  ProfileEditHeader,
  ProfileImage,
  SubmitButton,
} from 'components/ProfileEdit';
import { ChangeEvent, useEffect, useState } from 'react';

const Edit: NextPage = () => {
  const [nickname, setNickname] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log(nickname);
  }, [nickname]);

  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <ProfileEditHeader />
      <Flex width="100%" height="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <ProfileImage />
          <NicknameInput
            name="nickname-input"
            nickName={nickname}
            onChange={handleInputChange}
          />
          <SubmitButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Edit;
