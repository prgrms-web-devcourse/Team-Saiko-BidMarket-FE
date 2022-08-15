interface biddingProps {
  biddingPrice: number;
  minimumPrice: number;
}

const biddingPriceValidation = ({
  biddingPrice,
  minimumPrice,
}: biddingProps) => {
  const error: { biddingPrice?: string } = {};

  if (!biddingPrice) {
    error.biddingPrice = '입찰가를 입력해주세요!';
  }

  if (biddingPrice < minimumPrice) {
    error.biddingPrice = '입찰가는 시작가보다 많게 입력해주세요!';
  }

  if (biddingPrice % 100 !== 0) {
    error.biddingPrice = '100원 단위로 입력해주세요!';
  }

  if (biddingPrice > 10000000) {
    error.biddingPrice = '1000만원 이상 입찰 할 수 없습니다.';
  }

  return error;
};

export default biddingPriceValidation;
