import { Box, Text } from '@chakra-ui/react';

import chatTimeFormat from 'utils/format/chatTimeFormat';

interface ChatTimeTextProps {
  createdAt: Date;
}

const ChatTimeText = ({ createdAt }: ChatTimeTextProps) => {
  return (
    <Box alignSelf="flex-end">
      <Text
        color="#A6A6A6"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="12px"
        lineHeight="15px"
      >
        {chatTimeFormat(new Date(createdAt))}
      </Text>
    </Box>
  );
};

export default ChatTimeText;
