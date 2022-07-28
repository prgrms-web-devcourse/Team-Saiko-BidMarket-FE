import { Image } from '@chakra-ui/react';

import Header from '@common/Header';
import SideBar from '@common/Header/SideBar';

const MainHeader = () => (
  <Header
    leftContent={
      <Image src="/svg/bidMarket.svg" alt="bidmarket" height="20px" />
    }
    rightContent={<SideBar />}
  ></Header>
);

export default MainHeader;
