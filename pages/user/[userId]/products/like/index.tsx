import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, SEO } from 'components/common';
import { NoLikeProducts } from 'components/User';

const DUMMY = [];

const Like: NextPage = () => {
  return (
    <>
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>찜한 상품</Text>}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoLikeProducts />
        </Center>
      ) : (
        <Text>list of Product Cards</Text>
      )}
    </>
  );
};

export default Like;
