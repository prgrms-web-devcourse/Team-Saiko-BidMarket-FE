import { Image } from '@chakra-ui/react';

import { Header, SideBar } from 'components/common';

const MainHeader = () => (
  <Header
    leftContent={
      <Image src="/svg/bidMarket.svg" alt="bidmarket" height="20px" />
    }
    rightContent={<SideBar />}
  ></Header>
);

export default MainHeader;
