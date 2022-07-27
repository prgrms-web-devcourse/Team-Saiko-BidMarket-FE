import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

const Category = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg="#ffffff"
        border="1px"
        borderColor="#B6B6B6"
        w="47%"
        onClick={onOpen}
        color="#718096"
        fontWeight="normal"
        h="50px"
      >
        <Flex w="100%" justifyContent="space-between">
          카테고리
          <ChevronDownIcon w="20px" h="20px" color="#718096" />
        </Flex>
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Category;
