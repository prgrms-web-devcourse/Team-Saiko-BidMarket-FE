import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

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
        <Box marginTop="20px" marginBottom="45px">
          <Image
            src="/svg/bidmarket-login.svg"
            alt="basket"
            width="131px"
            height="131px"
          />
        </Box>
        <GoogleLoginButton />
      </Flex>
    </>
  );
};

export default Login;
