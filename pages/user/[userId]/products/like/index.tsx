import { Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { GoBackIcon, Header, HeaderTitle, SEO } from 'components/common';
import { NoProducts } from 'components/User';

// @ TODO 데이터 가져와서 연결 작업
const DUMMY = [];

const Like: NextPage = () => {
  return (
    <>
      {/* @ TODO 실제 사용자 닉네임으로 교체 예정 */}
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="찜한 상품" />}
      />
      {DUMMY.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoProducts pageName="userLikeProducts" />
        </Center>
      ) : (
        <Text>list of Product Cards</Text>
      )}
    </>
  );
};

export default Like;
