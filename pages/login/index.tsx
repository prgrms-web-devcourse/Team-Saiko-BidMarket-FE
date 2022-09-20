import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import { GoogleLoginButton, Phrases } from 'components/Login';
import { SVG_URL } from 'utils';

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
            src={SVG_URL.BIDMARKET_LOGIN}
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
