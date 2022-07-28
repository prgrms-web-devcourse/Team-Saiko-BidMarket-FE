import { Flex, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '@common/Header';
import GoBackIcon from '@common/Header/GoBackIcon';
import SEO from '@common/SEO';
import GoogleLoginButton from 'components/Login/GoogleLoginButton';
import Phrases from 'components/Login/Phrases';

const Login: NextPage = () => {
  return (
    <>
      <SEO title="로그인" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>비드마켓</Text>}
      />
      <Flex direction="column" alignItems="center" marginTop="20px">
        <Phrases />
        <Image
          src="/login/basket.png"
          alt="basket"
          marginTop="20px"
          marginBottom="45px"
        />
        <GoogleLoginButton />
      </Flex>
    </>
  );
};

export default Login;
