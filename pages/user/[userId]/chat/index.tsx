import { Center, Divider, Spinner } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { GoBackIcon, Header, HeaderTitle } from 'components/common';
import { NoChatting, ChattingCard } from 'components/User';
import useLoginUser from 'hooks/useLoginUser';
import { ChatRoomData, ChatRoomResponseType } from 'types/chatRooms';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;
  let user = {};

  try {
    user = (await userAPI.getUser(parseInt(userId as string, 10))).data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      user,
    },
  };
};

const Chats: NextPage = ({
  user: { id },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { isAuthFinished, authUser } = useLoginUser({
    handleAuthUser: ({ authUser }) => {
      authUser?.id === id ? getChatRooms() : router.replace('/');
    },
    handleNotAuthUser: () => router.replace('/'),
  });
  const [chatRooms, setChatRooms] = useState<ChatRoomResponseType>([]);

  const getChatRooms = async () => {
    try {
      // TODO: offset 적용 필요
      const { data } = await userAPI.getChatRooms(0, 10);

      setChatRooms(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!id) {
      router.replace('/');
    }
  }, [id, router]);

  if (!isAuthFinished || id !== authUser.id) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="채팅" />}
      />
      {chatRooms.length ? (
        chatRooms.map(
          ({
            chatRoomId,
            productInfo,
            opponentUserInfo,
            lastMessage,
            lastMessageDate,
          }: ChatRoomData) => (
            <Fragment key={chatRoomId}>
              <ChattingCard
                username={opponentUserInfo.username}
                profileImage={opponentUserInfo.profileImage}
                previewChat={lastMessage}
                productImage={productInfo.thumbnailImage}
                createdAt={
                  lastMessage === null
                    ? null
                    : new Date(lastMessageDate as Date)
                }
                onClick={() =>
                  router.push(
                    {
                      pathname: `/user/${id}/chat/${chatRoomId}`,
                      query: {
                        id,
                        chatRoomId,
                        chattingUsername: opponentUserInfo.username,
                      },
                    },
                    `/user/${id}/chat/${chatRoomId}`
                  )
                }
              />
              <Divider />
            </Fragment>
          )
        )
      ) : (
        <Center flexDirection="column" height="100%">
          <NoChatting />
        </Center>
      )}
    </>
  );
};

export default Chats;
