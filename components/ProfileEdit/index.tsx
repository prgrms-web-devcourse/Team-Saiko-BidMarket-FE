import {
  Avatar,
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

const ProfileEdit = () => {
  // TODO: header 공통 컴포넌트 구현되면 추가 해주기
  return (
    <>
      <Box textAlign="center">TODO 공통 헤더!</Box>
      <Center width="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <Avatar
            name="Christian Nwamba"
            size="2xl"
            src="https://bit.ly/code-beast"
          />
          <Flex width="100%" paddingRight="15px" paddingLeft="15px">
            <InputGroup size="md">
              <Input variant="flushed" size="lg" placeholder="물안경" />
              <InputRightElement width="24px" height="24px">
                <EditIcon alignSelf="center" />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default ProfileEdit;
