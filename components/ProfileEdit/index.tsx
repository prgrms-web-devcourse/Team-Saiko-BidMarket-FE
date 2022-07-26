import {
  Avatar,
  Box,
  Center,
  Circle,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import Header from '@common/header';
import GoBackIcon from '@common/Header/GoBackIcon';

const ProfileEdit = () => {
  return (
    <Flex flexDirection="column" width="100%" height="100%">
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
      <Flex width="100%" height="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <Circle
            position="relative"
            flexDirection="column"
            border="2px solid #FF4370"
            overflow="hidden"
            cursor="pointer"
          >
            <Avatar
              name="Christian Nwamba"
              size="2xl"
              src="https://bit.ly/code-beast"
            />
            <Box
              position="absolute"
              bottom="0"
              width="100%"
              height="32px"
              background="rgba(255, 67, 112, 0.6)"
              opacity="0.6"
            >
              <Text
                fontFamily="Roboto"
                fontStyle="normal"
                fontSize="15px"
                fontWeight="400"
                lineHeight="30px"
                color="white"
                textAlign="center"
              >
                변경
              </Text>
            </Box>
          </Circle>
          <Flex
            flexGrow="1"
            width="100%"
            paddingRight="19px"
            paddingLeft="19px"
            height="70%"
          >
            <InputGroup size="md">
              <Input
                variant="flushed"
                size="lg"
                placeholder="물안경"
                border="0.7px solid #BFBFBF"
                borderRadius="10px"
                paddingLeft="23px"
              />
              <InputRightElement paddingRight="16px">
                <EditIcon width="22px" height="22px" alignSelf="center" />
              </InputRightElement>
            </InputGroup>
          </Flex>
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
