import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header } from 'components/common';
import NoNotifications from 'components/User/NoNotifications';

//TODO : 데이터 연결
const DUMMY = [];

const Notifications: NextPage = () => {
  //TODO 인증된 사용자만 페이지 보이도록 구현

  return (
    <>
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>알림</Text>}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoNotifications />
        </Center>
      ) : (
        <
      )}
    </>
  );
};

export default Notifications;
