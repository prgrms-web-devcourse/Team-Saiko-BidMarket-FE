import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header } from 'components/common';
import { NoNotifications, Notification } from 'components/User';

//TODO : 데이터 연결
const DUMMY = [
  {
    id: 1,
    title: '입찰 종료',
    description:
      '“래쉬가드 M s...” 상품의 입찰 기간이 종료되었습니다. 등록하신 게시글을 확인해주세요!',
    iconImage: '/svg/sellProductMenuIcon.svg',
    productImage:
      'https://user-images.githubusercontent.com/61923768/182772718-258fa024-b207-4203-8e8a-2dc1f3bc21f2.png',
    createdAt: new Date(),
  },
];

const Notifications: NextPage = () => {
  //TODO 인증된 사용자만 페이지 보이도록 구현
  return (
    <>
      <Header leftContent={<GoBackIcon />} middleContent={<Text>알림</Text>} />
      {DUMMY.length ? (
        DUMMY.map(
          ({ id, title, description, iconImage, productImage, createdAt }) => (
            <Notification
              key={id}
              title={title}
              description={description}
              iconImage={iconImage}
              productImage={productImage}
              createdAt={createdAt}
            />
          )
        )
      ) : (
        <Center flexDirection="column" height="100%">
          <NoNotifications />
        </Center>
      )}
    </>
  );
};

export default Notifications;
