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
import { useEffect, useState } from 'react';

import { priceFormat, remainedTimeFormat } from 'utils';

import ProductBidProgress from './ProductBidDrawer';

interface ProductBidProps {
  writerId: string;
  authUserId: string;
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
  const [remainedTime, setRemainedTime] = useState('0초');
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    setRemainedTime(remainedTimeFormat(expireAt));
  }, [remainedTime]);

  const handleBidButtonClick = () => {
    if (!authUserId) {
      toast({
        position: 'top-right',
        title: '로그인 후 이용 가능합니다.',
        status: 'warning',
        duration: 1000,
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
            {remainedTime}
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
        <ProductBidProgress onClose={onClose} isOpen={isOpen} />
      </Flex>
    </Box>
  );
};

export default ProductBid;
