import Header from '@common/header';
import GoBackIcon from '@common/Header/GoBackIcon';
import { Text } from '@chakra-ui/react';

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
        color="#2E2E2E"
      >
        프로필수정
      </Text>
    }
  ></Header>
);

export default ProfileEditHeader;
