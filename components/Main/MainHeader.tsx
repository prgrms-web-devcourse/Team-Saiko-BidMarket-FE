import { HamburgerIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';

import Header from '@common/Header';

const ProfileEditHeader = () => (
  <Header
    leftContent={
      <Image src="/Header/BidMarket.png" alt="bidmarket" height="20px" />
    }
    rightContent={<HamburgerIcon />}
  ></Header>
);

export default ProfileEditHeader;
