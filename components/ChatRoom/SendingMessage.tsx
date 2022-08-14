import { Box, Flex, Text } from '@chakra-ui/react';

import { ChatTimeText } from '.';

interface SendingMessageProps {
  content: string;
  createdAt: Date;
}

const SendingMessage = ({ content, createdAt }: SendingMessageProps) => {
  return (
    <Flex width="100%" gap="16px" justifyContent="flex-end" alignItems="center">
      <ChatTimeText createdAt={createdAt} />
      <Box
        maxWidth="55%"
        bgColor=" #FF4370"
        borderRadius="0px 20px 20px 20px"
        padding="12px 16px 12px 16px"
      >
        <Text
          color="white"
          fontFamily="Inter"
          fontWeight="400"
          fontSize="15px"
          lineHeight="21px"
        >
          {content}
        </Text>
      </Box>
    </Flex>
  );
};

export default SendingMessage;
