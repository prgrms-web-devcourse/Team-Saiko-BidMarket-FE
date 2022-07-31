import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, SEO, SideBar } from 'components/common';
import { UserProfileInformation } from 'components/User';

const UserId: NextPage = () => {
  // TODO: url의 id와 로그인 중인 id를 비교해서 마이 페이지인지 사용자 페이지 확인
  const isMyPage = true;

  return (
    <>
      <SEO title="회원 정보 페이지" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="bold"
            lineHeight="23px"
            fontStyle="normal"
            color="barnd.dark"
          >
            {isMyPage ? '마이페이지' : '사용자 닉네임'}
          </Text>
        }
        rightContent={<SideBar />}
      ></Header>
      <UserProfileInformation profileImageUrl="https://bit.ly/code-beast" />
    </>
  );
};

export default UserId;
