import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import LogoutButton from './LogoutButton';

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO 전역 상태의 회원 정보 가지고 있기
  return (
    <>
      <HamburgerIcon boxSize="6" onClick={onOpen} />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">회원이름</DrawerHeader>
          <DrawerBody>
            <p>회원 정보</p>
            <LogoutButton />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default SideBar;
