import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, SEO } from 'components/common';
import { NoSellProducts, NoSellProductsOtherUsers } from 'components/User';

// @ TODO 데이터 가져와서 연결 작업
const DUMMY = [];

const Sell: NextPage = () => {
  // @ TODO 유저 정보와 접속자 정보 비교하는 작업 필요
  const isOwner = false;
  return (
    <>
      {/* @ TODO 실제 사용자 닉네임으로 교체 예정 */}
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>판매한 상품</Text>}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          {isOwner ? <NoSellProducts /> : <NoSellProductsOtherUsers />}
        </Center>
      ) : (
        <Text>list of Product Cards</Text>
      )}
    </>
  );
};

export default Sell;
