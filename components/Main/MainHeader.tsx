import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getItem } from 'apis/utils/storage';
import { Header, SideBar } from 'components/common';

import LoginButton from './LoginButton';

const MainHeader = () => {
  const [isLogin, setIsLogin] = useState(false);

  // @TODO HOOK으로 개선 (BM-184 참고)
  useEffect(() => {
    if (getItem('token')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <Header
      leftContent={
        <Image src="/svg/bidMarket.svg" alt="bidmarket" height="20px" />
      }
      // @TODO 컴포넌트로 분리 (BM-184 참고)
      rightContent={isLogin ? <SideBar /> : <LoginButton />}
    ></Header>
  );
};

export default MainHeader;
