import { Flex, Button, Text, Divider } from '@chakra-ui/react';

const ProductBid = () => {
  return (
    <Flex
      direction="column"
      gap="10px"
      position="fixed"
      bottom="0"
      width="100%"
    >
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
      <Button backgroundColor="brand.primary-900" cursor="pointer">
        <Text color="white">입찰하기</Text>
      </Button>
    </Flex>
  );
};

export default ProductBid;
