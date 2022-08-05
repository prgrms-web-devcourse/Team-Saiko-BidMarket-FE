import { Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

interface NoProducts {
  pageName:
    | 'userBidProducts'
    | 'userSellProducts'
    | 'userLikeProducts'
    | 'userSellProductsOther';
}

const NoProducts = ({ pageName }: NoProducts) => {
  const router = useRouter();
  let errorMessage = null;
  let guideMessage = null;
  let redirectMessage = '메인 페이지로 이동하기';

  switch (pageName) {
    case 'userBidProducts':
      errorMessage = '아직 입찰하신 상품이 없으시군요:(';
      guideMessage = '메인화면에서 다양한 상품을 구경하세요!';
      break;
    case 'userLikeProducts':
      errorMessage = '아직 찜하신 상품이 없으시군요:(';
      guideMessage = '마음에 드는 상품을 찜하고 간편하게 확인하세요!';
      break;
    case 'userSellProducts':
      errorMessage = '아직 판매하신 상품이 없으시군요:(';
      guideMessage = '첫 상품 판매를 도와드릴게요!';
      redirectMessage = '판매 글 작성하러 가기';
      break;
  }

  if (pageName === 'userSellProductsOther') {
    return (
      <Fragment>
        <Image src="/svg/noneProductOther.svg" alt="None Product" />
        <Text marginTop="34px">아직 판매하신 상품이 없어요:(</Text>
      </Fragment>
    );
  }

  return (
    <>
      <Image src="/svg/noneProduct.svg" alt="None Product" />
      <Text marginTop="34px">{errorMessage}</Text>
      <Text marginTop="10px" color="brand.dark-light">
        {guideMessage}
      </Text>

      <Button
        marginTop="24px"
        padding="10px 30px"
        borderRadius="30px"
        color="white"
        backgroundColor="brand.primary-900"
        onClick={() =>
          pageName === 'userSellProducts'
            ? router.push('/product')
            : router.push(`/`)
        }
      >
        {redirectMessage}
      </Button>
    </>
  );
};

export default NoProducts;
