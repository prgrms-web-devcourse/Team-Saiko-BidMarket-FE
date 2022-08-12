import { Flex, Text } from '@chakra-ui/react';

interface BidUser {
  biddingSucceed: boolean;
}

interface ProductBidEndTextByStatusProps {
  isSeller: boolean;
  bidder: BidUser;
  seller: BidUser;
}

const BIDDING_WIN_SELLER_TEXT = '상품이 낙찰되었습니다 :)';
const BIDDING_WIN_SELLER_MEDIUM_TEXT =
  '두근두근 구매자님과 첫 대화를 시작해보세요!';
const BIDDING_END_SELLER_TEXT = '경매 기간이 종료되었습니다:(';
const BIDDING_END_SELLER_MEDIUM_TEXT =
  '상품을 재등록하고 입찰자를 다시 모아보세요!';
const BIDDING_WIN_BIDDER_TEXT = '축하드립니다! 상품 입찰에 성공했어요 :)';
const BIDDING_WIN_BIDDER_MEDIUM_TEXT =
  '두근두근 판매자님과 첫 대화를 시작해보세요!';

const ProductBidEndTextByStatus = ({
  isSeller,
  seller,
  bidder,
}: ProductBidEndTextByStatusProps) => {
  let boldText = '';
  let mediumText = '';

  if (isSeller) {
    if (seller.biddingSucceed) {
      boldText = BIDDING_WIN_SELLER_TEXT;
      mediumText = BIDDING_WIN_SELLER_MEDIUM_TEXT;
    } else {
      boldText = BIDDING_END_SELLER_TEXT;
      mediumText = BIDDING_END_SELLER_MEDIUM_TEXT;
    }
  } else {
    if (bidder.biddingSucceed) {
      boldText = BIDDING_WIN_BIDDER_TEXT;
      mediumText = BIDDING_WIN_BIDDER_MEDIUM_TEXT;
    }
  }

  return (
    <Flex direction="column" alignItems="center">
      <Text as="span" fontWeight="bold">
        {boldText}
      </Text>
      <Text>{mediumText}</Text>
    </Flex>
  );
};

export default ProductBidEndTextByStatus;
