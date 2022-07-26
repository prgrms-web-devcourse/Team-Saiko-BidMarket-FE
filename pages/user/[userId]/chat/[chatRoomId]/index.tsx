import { Center, Flex } from '@chakra-ui/react';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { Fragment, useEffect, useRef } from 'react';

import { userAPI } from 'apis';
import { ChatDateBox, ChatInput, MessageList } from 'components/ChatRoom';
import { GoBackIcon, Header, HeaderTitle } from 'components/common';
import useChatMessages, { ChatMessagesType } from 'hooks/useChatMessages';
import useStomp from 'hooks/useStomp';

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
  const { chatMessages, setPrevMessagesFromApi, addMessage } =
    useChatMessages();
  const { connect, disConnect, publish } = useStomp({
    chatRoomId,
    userInfo: {
      userId: user.id,
      username: user.username,
      profileImage: user.profileImage,
    },
    addMessage,
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

    const nextMessages = [...chatMessages.reverse()];

    setPrevMessagesFromApi(nextMessages);
  };

  useEffect(() => {
    if (!lastRef.current) {
      return;
    }

    lastRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [lastRef, chatMessages]);

  // TODO: ... 아이콘에 채팅방 나가기, 신고하기 기능
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title={chattingUsername} />}
      />
      <Flex height="100%" flexDirection="column" gap="16px">
        {chatMessages.map(({ chatDate, messages }: ChatMessagesType, index) => (
          <Fragment key={index}>
            <Center>
              <ChatDateBox chatDate={chatDate} />
            </Center>
            <Flex flexDirection="column">
              <MessageList userId={user.id} messages={messages} />
            </Flex>
          </Fragment>
        ))}
      </Flex>
      <Flex
        position="sticky"
        bottom="0px"
        width="100%"
        marginTop="16px"
        bgColor="white"
        padding="10px 0"
      >
        <ChatInput onSubmit={publish} />
      </Flex>
      <div ref={lastRef} />
    </Flex>
  );
};

export default ChatRoom;
