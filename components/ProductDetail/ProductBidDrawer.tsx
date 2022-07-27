import {
  Text,
  Flex,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Input,
  DrawerHeader,
} from '@chakra-ui/react';

interface ProductBidDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductBidDrawer = ({ isOpen, onClose }: ProductBidDrawerProps) => {
  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent borderTopRadius="20px">
        <DrawerHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" gap="10px">
              <Image src="/CreateProduct/cp1.png" alt="hope-price" />
              <Text fontWeight="bold" fontSize="lg">
                입찰 희망가
              </Text>
            </Flex>
            <Button
              bg="brand.primary-900"
              color="white"
              size="sm"
              onClick={onClose}
            >
              입찰
            </Button>
          </Flex>
        </DrawerHeader>
        <DrawerBody paddingBottom="20px">
          <Flex direction="column" alignItems="flex-end">
            <Input placeholder="10000원 이상 입력해주세요" />
            <Text fontSize="sm" color="#007C14">
              11,000원
            </Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductBidDrawer;
