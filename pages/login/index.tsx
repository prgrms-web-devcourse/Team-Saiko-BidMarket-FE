import { Text } from '@chakra-ui/react';
import Header from '@common/Header';
import GoBackIcon from '@common/Header/GoBackIcon';
import Seo from '@common/Seo';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <>
      <Seo title="로그인" />
      <Header left={<GoBackIcon />} middle={<Text>비드마켓</Text>} />
    </>
  );
};

export default Login;
