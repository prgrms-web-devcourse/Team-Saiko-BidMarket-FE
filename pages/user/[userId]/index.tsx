import { Divider, Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { GoBackIcon, Header, SEO, SideBar } from 'components/common';
import { UserProfileEditButton, UserProfileInformation } from 'components/User';
import ProductMenuList from 'components/User/ProductMenuList';

const UserId: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  // TODO: url의 id와 로그인 중인 id를 비교해서 마이 페이지인지 사용자 페이지 확인
  const isMyPage = true;
  const dummyProfile = {
    nickname: '물안경',
    profileImageUrl: 'https://bit.ly/code-beast',
  };
  const productMenues = [
    {
      iconUrl: '/svg/sellProductMenuIcon.svg',
      title: '판매한 상품',
      routingUrl: `./${userId}/products/sell`,
    },
    {
      iconUrl: '/svg/bidProductMenuIcon.svg',
      title: '입찰한 상품',
      routingUrl: `./${userId}/products/bid`,
    },
    {
      iconUrl: '/svg/likeProductMenuIcon.svg',
      title: '찜한 상품',
      routingUrl: `./${userId}/products/like`,
    },
  ];

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
      <Flex width="100%" flexDirection="column" gap="29px">
        <UserProfileInformation
          profileImageUrl={dummyProfile.profileImageUrl}
          nickname={dummyProfile.nickname}
        />
        {isMyPage ? (
          <UserProfileEditButton
            onClick={() => router.push(`./${userId}/edit`)}
          />
        ) : undefined}
      </Flex>
      <Divider height="7px" marginTop="27px" backgroundColor="#F2F2F2" />
      <ProductMenuList productMenues={productMenues} />
    </>
  );
};

export default UserId;
