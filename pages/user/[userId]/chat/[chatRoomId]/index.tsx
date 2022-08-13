import { Center, Flex, Input, Text } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { ChatMeesageResponseType } from 'types/chatMessages';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId, chatRoomId } = context.query;
  console.log(context.query);
  let user = {};

  try {
    user = (await userAPI.getUser(parseInt(userId as string, 10))).data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
      chatRoomId: parseInt(chatRoomId as string, 10),
    },
  };
};

const ChatRoom: NextPage = ({
  user: { id },
  chatRoomId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [messages, setMessages] = useState<ChatMeesageResponseType>([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const { data } = await userAPI.getChatMessagesByChatRoomId({
      chatRoomId,
      offset: 0,
      limit: 10,
    });

    setMessages([...messages, ...data.reverse()]);
  };

  return (
    <Flex flexDirection="column" gap={'16px'}>
      <h1>임시 채팅방이요!</h1>
      <Flex flexDirection="column" gap={'16px'}>
        {messages.map(({ userId, content, createdAt }, index) => (
          <Flex key={index} flexDirection="row" gap={'16px'}>
            <Text>{userId}</Text>
            <Text color="red">{content}</Text>
            <Text>{String(createdAt)}</Text>
          </Flex>
        ))}
      </Flex>

      <Input />
    </Flex>
  );
};

export default ChatRoom;
