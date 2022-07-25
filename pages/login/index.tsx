import { Text } from '@chakra-ui/react';
import Header from '@common/header';
import GoBackIcon from '@common/header/goBackIcon';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  return <Header left={<GoBackIcon />} middle={<Text>비드마켓</Text>} />;
};

export default Login;
