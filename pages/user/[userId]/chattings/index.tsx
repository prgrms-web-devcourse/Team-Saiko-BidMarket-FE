import { Center, Divider, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header } from 'components/common';
import { NoChatting, ChattingCard } from 'components/User';

//TODO : 데이터 연결
const DUMMY = [
  {
    id: 1,
    user: {
      username: '유도진',
      profileImage:
        'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/profiles/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.png',
    },
    previewChat:
      '도착 10분전에 연락 주실 수 있을까요? 저도 미리 준비해야 해서요 ㅎㅎ',
    productImage:
      'https://user-images.githubusercontent.com/61923768/182772718-258fa024-b207-4203-8e8a-2dc1f3bc21f2.png',
    createdAt: new Date('2022-07-20T14:36:00'),
  },
  {
    id: 2,
    user: {
      username: '유도진',
      profileImage:
        'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/profiles/%E1%84%80%E1%85%A1%E1%86%B7%E1%84%8C%E1%85%A1.png',
    },
    previewChat: '잘 작동하는지 마지막으로 확인 부탁드려도 될까여?',
    productImage:
      'https://user-images.githubusercontent.com/61923768/182772718-258fa024-b207-4203-8e8a-2dc1f3bc21f2.png',
    createdAt: new Date('2022-08-02T14:51:00'),
  },
];

const Chattings: NextPage = () => {
  //TODO 인증된 사용자만 페이지 보이도록 구현
  return (
    <>
      <Header leftContent={<GoBackIcon />} middleContent={<Text>채팅</Text>} />
      {DUMMY.length ? (
        DUMMY.map(({ id, user, previewChat, productImage, createdAt }) => (
          <>
            <ChattingCard
              key={id}
              username={user.username}
              profileImage={user.profileImage}
              previewChat={previewChat}
              productImage={productImage}
              createdAt={createdAt}
            />
            <Divider />
          </>
        ))
      ) : (
        <Center flexDirection="column" height="100%">
          <NoChatting />
        </Center>
      )}
    </>
  );
};

export default Chattings;
