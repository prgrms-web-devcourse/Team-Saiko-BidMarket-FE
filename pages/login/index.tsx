import { Flex, Image } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import { GoogleLoginButton, Phrases } from 'components/Login';

const Login: NextPage = () => {
  return (
    <>
      <SEO title="로그인" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="비드마켓" />}
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
