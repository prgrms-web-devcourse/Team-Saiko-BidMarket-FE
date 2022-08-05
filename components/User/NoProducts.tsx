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

  return (
    <>
      {pageName !== 'userSellProductsOther' ? (
        <Fragment>
          <Image src="/svg/noneProduct.svg" alt="None Product" />
          <Text marginTop="34px">
            {pageName === 'userBidProducts' &&
              '아직 입찰하신 상품이 없으시군요:('}
            {pageName === 'userSellProducts' &&
              '아직 판매하신 상품이 없으시군요:('}
            {pageName === 'userLikeProducts' &&
              '아직 찜하신 상품이 없으시군요:('}
          </Text>
          <Text marginTop="10px" color="brand.dark-light">
            {pageName === 'userBidProducts' &&
              '메인화면에서 다양한 상품을 구경하세요!'}
            {pageName === 'userSellProducts' && '첫 상품 판매를 도와드릴게요!'}
            {pageName === 'userLikeProducts' &&
              '마음에 드는 상품을 찜하고 간편하게 확인하세요!'}
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
            {pageName === 'userSellProducts'
              ? '판매 글 작성하러 가기'
              : '메인 페이지로 이동하기'}
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <Image src="/svg/noneProductOther.svg" alt="None Product" />
          <Text marginTop="34px">아직 판매하신 상품이 없어요:(</Text>
        </Fragment>
      )}
    </>
  );
};

export default NoProducts;
