import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, SEO } from 'components/common';
import { NoBidProducts } from 'components/User';

// @ TODO 데이터 가져와서 연결 작업
const DUMMY = [];

const Bid: NextPage = () => {
  return (
    <>
      {/* @ TODO 실제 사용자 닉네임으로 교체 예정 */}
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>입찰한 상품</Text>}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoBidProducts />
        </Center>
      ) : (
        <Text>list of Product Cards</Text>
      )}
    </>
  );
};

export default Bid;
