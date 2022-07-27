import { Image } from '@chakra-ui/react';

import Header from '@common/Header';
import SideBar from '@common/Header/SideBar';

const MainHeader = () => (
  <Header
    leftContent={
      <Image src="/Header/BidMarket.png" alt="bidmarket" height="20px" />
    }
    rightContent={<SideBar />}
  ></Header>
);

export default MainHeader;
