import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, SEO } from 'components/common';
import { NoSellProduct } from 'components/User';

const DUMMY = [];

const Sell: NextPage = () => {
  return (
    <>
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>판매한 상품</Text>}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoSellProduct />
        </Center>
      ) : (
        <Text>list of Product Cards</Text>
      )}
    </>
  );
};

export default Sell;
