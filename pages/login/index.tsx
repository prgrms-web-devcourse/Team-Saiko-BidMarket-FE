import { Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '@common/Header';
import GoBackIcon from '@common/Header/GoBackIcon';
import SEO from '@common/SEO';

const Login: NextPage = () => {
  return (
    <>
      <SEO title="로그인" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>비드마켓</Text>}
      />
    </>
  );
};

export default Login;
