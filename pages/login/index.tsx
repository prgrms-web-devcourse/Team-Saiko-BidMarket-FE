import { Flex, Image, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header, GoBackIcon, SEO } from 'components/common';
import { GoogleLoginButton, Phrases } from 'components/Login';

const Login: NextPage = () => {
  return (
    <>
      <SEO title="로그인" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<Text>비드마켓</Text>}
      />
      <Flex direction="column" alignItems="center" marginTop="50px">
        <Phrases />
        <Image
          src="/svg/bidmarket-login.svg"
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
