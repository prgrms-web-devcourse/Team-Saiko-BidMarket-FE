import { Flex, Button, Text, Divider, useDisclosure } from '@chakra-ui/react';

import ProductBidProgress from './ProductBidDrawer';

const ProductBid = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" gap="10px">
      <Divider />
      <Flex justifyContent="space-between" alignItems="center">
        <Text>시작가</Text>
        <Text
          bg="brand.primary-100"
          color="brand.primary-900"
          padding="3px 10px"
          borderRadius="20px"
          fontWeight="bold"
        >
          10,000원
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>남은 시간</Text>
        <Text fontSize="sm" bg="#EFEFEF" padding="3px 10px" borderRadius="20px">
          01일 22시간 22분 40초
        </Text>
      </Flex>
      <Button
        backgroundColor="brand.primary-900"
        cursor="pointer"
        borderRadius="50px"
        marginBottom="15px"
        onClick={onOpen}
      >
        <Text color="white">입찰하기</Text>
      </Button>
      <ProductBidProgress onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default ProductBid;
