import { Center, Flex } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useEffect, useRef, useState } from 'react';

import { userAPI } from 'apis';
import { ChatDateBox, ChatInput, MessageList } from 'components/ChatRoom';
import { GoBackIcon, Header, HeaderTitle } from 'components/common';
import useStomp from 'hooks/useStomp';
import { ChatMeesageResponseType } from 'types/chatMessages';

export const getServerSideProps: GetServerSideProps = async ({
  query: { userId, chatRoomId, chattingUsername = '' },
}) => {
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
      chattingUsername,
    },
  };
};

const ChatRoom: NextPage = ({
  user,
  chatRoomId,
  chattingUsername,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [messages, setMessages] = useState<ChatMeesageResponseType>([]);
  const { connect, disConnect, publish } = useStomp({
    chatRoomId,
    userInfo: {
      userId: user.id,
      username: user.username,
      profileImage: user.profileImage,
    },
    setMessages,
  });
  const lastRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!lastRef.current) {
      return;
    }

    lastRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [lastRef, messages]);

  // TODO: ... 아이콘에 채팅방 나가기, 신고하기 기능
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title={chattingUsername} />}
      />
      <Flex height="100%" flexDirection="column" gap="16px">
        <Center>
          <ChatDateBox />
        </Center>
        <Flex flexDirection="column" flexGrow="1">
          <MessageList userId={user.id} messages={messages} />
        </Flex>
        <Flex position="sticky" bottom="0" width="100%" marginTop="16px">
          <ChatInput onSubmit={publish} />
        </Flex>
        <div ref={lastRef} />
      </Flex>
    </Flex>
  );
};

export default ChatRoom;
