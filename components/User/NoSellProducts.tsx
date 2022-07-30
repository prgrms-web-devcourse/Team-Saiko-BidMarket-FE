import { Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NoSellProducts = () => {
  const router = useRouter();

  return (
    <>
      <Image src="/svg/noneProduct.svg" alt="None Product" />
      <Text marginTop="34px">아직 판매하신 상품이 없으시군요:(</Text>
      <Text marginTop="10px" color="#8E8E8E">
        첫 상품 판매를 도와드릴게요!
      </Text>
      <Button
        marginTop="24px"
        padding="10px 30px"
        borderRadius="30px"
        color="white"
        backgroundColor="brand.primary-900"
        onClick={() => router.push(`/product`)}
      >
        판매 글 작성하러 가기
      </Button>
    </>
  );
};

export default NoSellProducts;
