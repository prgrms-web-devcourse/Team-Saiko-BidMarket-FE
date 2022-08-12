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

//TODO : 데이터 연결
const DUMMY = [
  {
    chatRoomId: 1,
    productInfo: {
      productId: 1,
      thumbnailImage:
        'https://user-images.githubusercontent.com/61923768/182772718-258fa024-b207-4203-8e8a-2dc1f3bc21f2.png',
    },
    opponentUserInfo: {
      username: '물안경',
      profileImage:
        'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/profiles/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.png',
    },
    lastMessage:
      '어쩜 이렇게 하늘은 더 파란 건지? 오늘따라 왜 바람은 또 완벽한지? ',
    lastMessageDate: new Date('2022-07-20T14:36:00'),
  },
  {
    chatRoomId: 2,
    productInfo: {
      productId: 1,
      thumbnailImage:
        'https://user-images.githubusercontent.com/61923768/182772718-258fa024-b207-4203-8e8a-2dc1f3bc21f2.png',
    },
    opponentUserInfo: {
      username: '물안경',
      profileImage:
        'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/profiles/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.png',
    },
    lastMessage: '눈물이 차올라서 고갤 들어 흐르지 못하게 또 살짝 웃어',
    lastMessageDate: new Date('2022-07-20T14:36:00'),
  },
];

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
  const { id: authUserId } = useLoginUser();
  const [chatRooms, setChatRooms] = useState<ChatRoomResponseType>([]);

  useEffect(() => {
    if (authUserId === -1) {
      return;
    }

    if (!id || id !== authUserId) {
      router.replace('/');

      return;
    }

    getChatRooms();
  }, [id, authUserId, router]);

  const getChatRooms = async () => {
    try {
      // TODO: offset 적용 필요
      const { data } = await userAPI.getChatRooms(0, 10);

      setChatRooms(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!authUserId || authUserId !== id) {
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
                createdAt={lastMessageDate}
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
