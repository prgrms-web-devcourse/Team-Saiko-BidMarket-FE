import {
  Box,
  Flex,
  Button,
  Text,
  Divider,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import ProductBidProgress from './ProductBidDrawer';

interface ProductBidProps {
  minimumPrice: number;
  expireAt: Date;
}

const ProductBid = ({ minimumPrice, expireAt }: ProductBidProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  3;
  return (
    <Box
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      width="100%"
      maxWidth="738px"
      margin="0 auto"
      padding="0 15px"
      z-index="10"
      backgroundColor="white"
    >
      <Flex direction="column" gap="10px">
        <Divider />
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="10px">
            <Image src="/svg/price.svg" alt="start-price" />
            <Text>시작가</Text>
          </Flex>
          <Text
            bg="brand.primary-100"
            color="brand.primary-900"
            padding="3px 10px"
            borderRadius="20px"
            fontWeight="bold"
          >
            {minimumPrice}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="10px">
            <Image src="/svg/time.svg" alt="remained-time" />
            <Text>남은 시간</Text>
          </Flex>
          <Text
            fontSize="sm"
            bg="#EFEFEF"
            padding="3px 10px"
            borderRadius="20px"
          >
            {expireAt.toString()}
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
    </Box>
  );
};

export default ProductBid;
