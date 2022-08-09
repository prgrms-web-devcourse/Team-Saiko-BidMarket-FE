import {
  Box,
  Flex,
  Button,
  Text,
  Divider,
  useDisclosure,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { priceFormat, remainedTimeFormat } from 'utils';

import ProductBidProgress from './ProductBidDrawer';

interface ProductBidProps {
  writerId: number;
  authUserId: number;
  minimumPrice: number;
  expireAt: Date;
}

const ProductBid = ({
  writerId,
  authUserId,
  minimumPrice,
  expireAt,
}: ProductBidProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();

  const handleBidButtonClick = () => {
    if (authUserId === -1) {
      toast({
        position: 'top',
        title: '입찰은 로그인 후 이용 가능합니다.',
        status: 'warning',
        duration: 1500,
      });

      router.push('/login');
      return;
    }

    onOpen();
  };

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
            {priceFormat(minimumPrice)}원
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
            {remainedTimeFormat(expireAt)}
          </Text>
        </Flex>
        <Button
          backgroundColor="brand.primary-900"
          cursor="pointer"
          borderRadius="50px"
          marginBottom="15px"
          onClick={handleBidButtonClick}
          _active={{
            borderColor: '#brand.primary-900',
          }}
          disabled={writerId === authUserId}
        >
          <Text color="white">입찰하기</Text>
        </Button>
        <ProductBidProgress
          minimumPrice={minimumPrice}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Flex>
    </Box>
  );
};

export default ProductBid;
