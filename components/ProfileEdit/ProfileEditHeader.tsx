import { Text } from '@chakra-ui/react';

import Header from 'components/common/Header';
import GoBackIcon from 'components/common/Header/GoBackIcon';

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
