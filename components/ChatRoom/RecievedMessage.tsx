import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { UserInfo } from 'types/user';

import { ChatTimeText } from '.';

interface RecievedMessageProps {
  userInfo: UserInfo;
  content: string;
  createdAt: Date;
}

const RecievedMessage = ({
  userInfo,
  content,
  createdAt,
}: RecievedMessageProps) => {
  return (
    <Flex width="100%" justifyContent="flex-start" alignItems="center">
      <Avatar
        alignSelf="flex-start"
        src={userInfo.profileImage}
        marginRight="10px"
      />
      <Flex
        alignSelf="flex-start"
        flexDirection="column"
        maxWidth="55%"
        marginRight="4px"
      >
        <Text
          fontFamily="Inter"
          fontWeight="700"
          fontSize="14px"
          lineHeight="16.8px"
        >
          {userInfo.username}
        </Text>
        <Box
          maxWidth="100%"
          bgColor="#EFEFEF"
          borderRadius="0px 20px 20px 20px"
          padding="12px 16px 12px 16px"
        >
          <Text
            color="brand.dark"
            fontFamily="Inter"
            fontWeight="400"
            fontSize="15px"
            lineHeight="21px"
          >
            {content}
          </Text>
        </Box>
      </Flex>
      <ChatTimeText createdAt={createdAt} />
    </Flex>
  );
};

export default RecievedMessage;
