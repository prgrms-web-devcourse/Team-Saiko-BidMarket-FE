import { Flex, Text } from '@chakra-ui/react';

interface BidUser {
  biddingSucceed: boolean;
}

interface ProductBidEndTextByStatusProps {
  isSeller: boolean;
  bidder: BidUser;
  seller: BidUser;
}

const ProductBidEndTextByStatus = ({
  isSeller,
  seller,
  bidder,
}: ProductBidEndTextByStatusProps) => {
  let boldText = '';
  let mediumText = '';

  if (isSeller) {
    if (seller.biddingSucceed) {
      boldText = '상품이 낙찰되었습니다 :)';
      mediumText = '두근두근 구매자님과 첫 대화를 시작해보세요!';
    } else {
      boldText = '경매 기간이 종료되었습니다:(';
      mediumText = '상품을 재등록하고 입찰자를 다시 모아보세요!';
    }
  } else {
    if (bidder.biddingSucceed) {
      boldText = '축하드립니다! 상품 입찰에 성공했어요 :)';
      mediumText = '두근두근 판매자님과 첫 대화를 시작해보세요!';
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
