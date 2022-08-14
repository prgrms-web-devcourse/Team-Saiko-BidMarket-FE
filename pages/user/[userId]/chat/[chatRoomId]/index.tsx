import { Center, Flex } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useEffect, useRef, useState } from 'react';

import { userAPI } from 'apis';
import {
  ChatDateBox,
  ChatInput,
  RecievedMessage,
  SendingMessage,
} from 'components/ChatRoom';
import { GoBackIcon, Header, HeaderTitle } from 'components/common';
import useStomp from 'hooks/useStomp';
import { ChatMeesageResponseType } from 'types/chatMessages';

export const getServerSideProps: GetServerSideProps = async ({
  query: { userId, chatRoomId, chattingUsername },
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
      chattingUsername,
    },
  };
};

const ChatRoom: NextPage = ({
  userInfo,
  chatRoomId,
  chattingUsername,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [messages, setMessages] = useState<ChatMeesageResponseType>([]);
  const { connect, disConnect, publish } = useStomp({
    chatRoomId,
    userInfo,
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

  return (
    <Flex flexDirection="column">
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title={chattingUsername} />}
      />
      <Flex flexDirection="column" gap={'16px'}>
        <Center>
          <ChatDateBox />
        </Center>
        {messages.map(
          ({ userInfo: userInfoInMessage, content, createdAt }, index) => {
            return userInfo.id === userInfoInMessage.userId ? (
              <Flex key={index} width="100%">
                <SendingMessage content={content} createdAt={createdAt} />
              </Flex>
            ) : (
              <Flex key={index} width="100%">
                <RecievedMessage
                  userInfo={userInfoInMessage}
                  content={content}
                  createdAt={createdAt}
                />
              </Flex>
            );
          }
        )}
        <Flex position="sticky" bottom="0" width="100%" marginTop="16px">
          <ChatInput onSubmit={publish} />
        </Flex>
        <div ref={lastRef} />
      </Flex>
    </Flex>
  );
};

export default ChatRoom;
