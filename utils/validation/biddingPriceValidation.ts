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

  return error;
};

export default biddingPriceValidation;
