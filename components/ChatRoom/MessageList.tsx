import { Flex } from '@chakra-ui/react';

import { ChatMeesageResponseType } from 'types/chatMessages';

import { RecievedMessage, SendingMessage } from '.';

interface MessageListProps {
  userId: number;
  messages: ChatMeesageResponseType;
}

const MessageList = ({ userId, messages }: MessageListProps) => {
  return (
    <Flex width="100%" height="100%" flexDirection="column" gap="16px">
      {messages.map(({ userInfo, content, createdAt }, index) =>
        userId === userInfo.userId ? (
          <Flex key={index} width="100%">
            <SendingMessage content={content} createdAt={createdAt} />
          </Flex>
        ) : (
          <Flex key={index} width="100%">
            <RecievedMessage
              userInfo={userInfo}
              content={content}
              createdAt={createdAt}
            />
          </Flex>
        )
      )}
    </Flex>
  );
};

export default MessageList;
