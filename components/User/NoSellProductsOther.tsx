import { Image, Text } from '@chakra-ui/react';

const NoSellProductsOther = () => {
  return (
    <>
      <Image src="/svg/noneProductOther.svg" alt="None Product" />
      <Text marginTop="34px">아직 판매하신 상품이 없어요:(</Text>
    </>
  );
};

export default NoSellProductsOther;
