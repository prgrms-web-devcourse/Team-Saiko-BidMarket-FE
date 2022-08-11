import {
  Box,
  Flex,
  Button,
  Text,
  Divider,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { bidAPI } from 'apis';
import { Toast } from 'components/common';
import {
  ProductBidProgress,
  ProductBidRemainedTime,
} from 'components/ProductDetail';
import { priceFormat } from 'utils';

//1. 상품 상세 정보 조회 API O
//2. 비딩 만료 시간 => 만료가 되었는지 확인
//// 비딩 진행 중
////// 판매자: 아무것도 안함(입찰이 진행중입니다.)
////// 입찰 금액 조회 API
////////  => 200: 입찰한 사람(입찰 금액 확인 버튼) => 입찰한 금액 보이도록 진행
////////  => 404: 입찰 안함(입찰하기 버튼) => 입찰 할 수 있도록
//// 비딩 종료
////// 비딩 결과 조회 API
////////  낙찰된 상품의 판매자(채팅하기 버튼 - 구매자와 첫 대화)
////////  낙찰 안된 상품의 판매자(상품 재등록하기)
////////  낙찰된 입찰자(채팅하기 버튼 - 입찰 성공)
////////  낙찰 안된 입찰자( )
////////  입찰 안한 사용자(404 -> 입찰 종료된 상품입니다.)

const SELLER = '판매자';
const BIDDER = '압찰자';
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
  const { productId } = router.query;
  const isExpiredBidding =
    Math.floor(new Date(expireAt).getTime() - new Date().getTime()) < 0;
  const isSeller = writerId === authUserId;
  const [seller, setSeller] = useState({
    biddingSucceed: false,
    chatRoomId: 0,
  });
  const [bidder, setBidder] = useState({
    biddingPrice: 0,
    biddingSucceed: false,
    chatRoomId: 0,
  });

  useEffect(() => {
    if (isExpiredBidding) {
      //TODO: 비딩 결과 조회 API 요청
      getBiddingResultByRole();
    } else {
      ////// 입찰 금액 조회 API
      ////////  => 200: 입찰한 사람(입찰 금액 확인 버튼) => 입찰한 금액 보이도록 진행 O
      ////////  => 404: 입찰 안함(입찰하기 버튼) => 입찰 할 수 있도록 O
      getBiddingPrice();
    }
  }, [isExpiredBidding]);

  const getBiddingResultByRole = async () => {
    try {
      const { role, biddingSucceed, chatRoomId } = (
        await bidAPI.getBiddingResult(parseInt(productId as string, 10))
      ).data;
      if (role === SELLER) {
        setSeller(getBiddingResult(biddingSucceed, chatRoomId));
      } else if (role === BIDDER) {
        setBidder({
          ...bidder,
          ...getBiddingResult(biddingSucceed, chatRoomId),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBiddingResult = (biddingSucceed: boolean, chatRoomId: number) => {
    if (biddingSucceed) {
      return { biddingSucceed: true, chatRoomId };
    } else {
      return { biddingSucceed: false, chatRoomId: 0 };
    }
  };

  const getBiddingPrice = async () => {
    try {
      const { biddingPrice } = (
        await bidAPI.getBiddingPrice(parseInt(productId as string, 10))
      ).data;

      setBidder({
        ...bidder,
        biddingPrice,
      });
      console.log(biddingPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBidButtonClick = () => {
    if (authUserId === -1) {
      Toast('입찰은 로그인 후 이용 가능합니다.', 'warning');

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
          <ProductBidRemainedTime expireAt={expireAt} />
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
          disabled={isSeller}
        >
          <Text color="white">입찰하기</Text>
        </Button>
        <ProductBidProgress
          minimumPrice={minimumPrice}
          onClose={onClose}
          isOpen={isOpen}
          seller={seller}
          bidder={bidder}
        />
      </Flex>
    </Box>
  );
};

export default ProductBid;
