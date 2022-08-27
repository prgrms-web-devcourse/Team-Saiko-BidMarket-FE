import {
  Box,
  Flex,
  Button,
  Text,
  Divider,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { bidAPI } from 'apis';
import {
  ProductBidProgress,
  ProductBidRemainedTime,
} from 'components/ProductDetail';
import { priceFormat, setToastInfo } from 'utils';

import ProductBidEndTextByStatus from './ProductBidEndTextByStatus';

const SELLER = '판매자';
const BIDDER = '입찰자';
const BIDDING_PROGRESS_TEXT = '입찰이 진행중입니다.';
const BIDDING_PRICE_SHOW_TEXT = '입찰 금액 보기';
const BIDDING_TEXT = '입찰하기';
const CHATTING_TEXT = '채팅하기';
const PRODUCT_RECREATE_TEXT = '상품 재등록하기';
const BIDDING_END_PRODUCT_TEXT = '입찰 종료된 상품입니다.';
const MINUTE_TO_SECONDS = 60000;

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
  const { productId } = router.query;
  const remainedBiddingTime = Math.floor(
    new Date(expireAt).getTime() - new Date().getTime()
  );
  const isExpiredBidding = Math.floor(remainedBiddingTime) < 0;
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
  const [isCalculatingBiddingResult, setIsCalculatingBiddingResult] =
    useState(false);
  const [isExpiredAndCalculatedBidding, setIsExpiredAndCalculatedBidding] =
    useState(false);

  useEffect(() => {
    if (isExpiredBidding) {
      getBiddingResultByRole();
      return;
    }

    getBiddingPrice();
    calculateBiddingResult();
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
      return { biddingSucceed, chatRoomId };
    } else {
      return { biddingSucceed, chatRoomId: 0 };
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
    } catch (error) {
      console.log(error);
    }
  };

  const calculateBiddingResult = () => {
    setTimeout(() => {
      setIsCalculatingBiddingResult(true);
    }, remainedBiddingTime);

    setTimeout(() => {
      setIsCalculatingBiddingResult(false);
      setIsExpiredAndCalculatedBidding(true);
      router.reload();
    }, remainedBiddingTime + MINUTE_TO_SECONDS);
  };

  const isShowBiddingEndText = () => {
    return isExpiredAndCalculatedBidding && (isSeller || bidder.biddingSucceed);
  };

  const isBidButtonDisabled = () => {
    if (isExpiredBidding) {
      if (!isSeller && !bidder.biddingSucceed) {
        return true;
      }
      return false;
    }

    if (isSeller) {
      return true;
    }
    return false;
  };

  const getButtonNameByStatus = () => {
    if (!isExpiredBidding) {
      if (isSeller) {
        return BIDDING_PROGRESS_TEXT;
      } else {
        return bidder.biddingPrice ? BIDDING_PRICE_SHOW_TEXT : BIDDING_TEXT;
      }
    }

    if (isSeller) {
      return seller.biddingSucceed ? CHATTING_TEXT : PRODUCT_RECREATE_TEXT;
    } else {
      return bidder.biddingSucceed ? CHATTING_TEXT : BIDDING_END_PRODUCT_TEXT;
    }
  };

  const handleBidButtonClick = () => {
    if (isSeller && !seller.biddingSucceed) {
      router.push(`/product`);
      return;
    }

    if (seller.biddingSucceed) {
      router.push(`/user/${authUserId}/chat/${seller.chatRoomId}`);
      return;
    }

    if (bidder.biddingSucceed) {
      router.push(`/user/${authUserId}/chat/${bidder.chatRoomId}`);
      return;
    }

    if (authUserId === -1) {
      toast(
        setToastInfo('top', '입찰은 로그인 후 이용 가능합니다.', 'warning')
      );
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
        {isShowBiddingEndText() ? (
          <ProductBidEndTextByStatus
            isSeller={isSeller}
            seller={seller}
            bidder={bidder}
          />
        ) : (
          <>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center" gap="10px">
                <Image
                  src="/svg/price.svg"
                  alt="start-price"
                  width="25px"
                  height="25px"
                />
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
                <Image
                  src="/svg/time.svg"
                  alt="remained-time"
                  width="25px"
                  height="25px"
                />
                <Text>남은 시간</Text>
              </Flex>
              <ProductBidRemainedTime expireAt={expireAt} />
            </Flex>
          </>
        )}
        <Button
          backgroundColor="brand.primary-900"
          cursor="pointer"
          borderRadius="50px"
          marginBottom="15px"
          onClick={handleBidButtonClick}
          _active={{
            borderColor: '#brand.primary-900',
          }}
          disabled={isCalculatingBiddingResult ? true : isBidButtonDisabled()}
        >
          <Text color="white">
            {isCalculatingBiddingResult
              ? '잠시 후에 낙찰 결과가 공개됩니다.'
              : getButtonNameByStatus()}
          </Text>
        </Button>
        <ProductBidProgress
          minimumPrice={minimumPrice}
          onClose={onClose}
          isOpen={isOpen}
          bidder={bidder}
        />
      </Flex>
    </Box>
  );
};

export default ProductBid;
