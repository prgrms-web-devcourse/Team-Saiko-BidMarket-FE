import { Text } from '@chakra-ui/react';

import { Header, GoBackIcon } from 'components/common';

const ProfileEditHeader = () => (
  <Header
    leftContent={<GoBackIcon />}
    middleContent={
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="bold"
        lineHeight="23px"
        fontStyle="normal"
        color="barnd.dark"
      >
        프로필수정
      </Text>
    }
  ></Header>
);

export default ProfileEditHeader;
