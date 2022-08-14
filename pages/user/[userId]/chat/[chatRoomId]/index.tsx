import { Flex, Input, Text } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useEffect, useState } from 'react';

import { userAPI } from 'apis';
import useStomp from 'hooks/useStomp';
import { ChatMeesageResponseType } from 'types/chatMessages';

export const getServerSideProps: GetServerSideProps = async ({
  query: { userId, chatRoomId },
}) => {
  let userInfo = {};

  try {
    userInfo = (await userAPI.getUser(parseInt(userId as string, 10))).data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      userInfo,
      chatRoomId: parseInt(chatRoomId as string, 10),
    },
  };
};

const ChatRoom: NextPage = ({
  userInfo,
  chatRoomId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [messages, setMessages] = useState<ChatMeesageResponseType>([]);
  const { connect, disConnect, publish } = useStomp({
    chatRoomId,
    userInfo,
    setMessages,
  });

  useEffect(() => {
    connect();
    return () => disConnect();
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const chatMessages = (
      await userAPI.getChatMessagesByChatRoomId({
        chatRoomId,
        offset: 0,
        limit: 100,
      })
    ).data;

    setMessages([...chatMessages.reverse(), ...messages]);
  };

  const handleKeyup = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;

      publish(target.value);
      target.value = '';

      return;
    }
  };

  return (
    <Flex flexDirection="column" gap={'16px'}>
      <h1>임시 채팅방이요!</h1>
      <Flex flexDirection="column" gap={'16px'}>
        {messages.map(({ userInfo, content, createdAt }, index) => (
          <Flex key={index} flexDirection="row" gap={'16px'}>
            <Text>{userInfo.username}</Text>
            <Text color="red">{content}</Text>
            <Text>{String(createdAt)}</Text>
          </Flex>
        ))}
      </Flex>

      <Input onKeyUp={handleKeyup} />
    </Flex>
  );
};

export default ChatRoom;
