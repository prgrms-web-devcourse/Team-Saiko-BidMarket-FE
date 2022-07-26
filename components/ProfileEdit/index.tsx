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
import ProfileEditHeader from './ProfileEditHeader';
import ProfileImage from './ProfileImage';

const ProfileEdit = () => {
  return (
    <Flex flexDirection="column" width="100%" height="100%">
      <ProfileEditHeader />
      <Flex width="100%" height="100%" marginTop="48px">
        <Flex width="100%" direction="column" alignItems="center" gap="48px">
          <ProfileImage />
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
