import { Button, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NoBidProducts = () => {
  const router = useRouter();

  return (
    <>
      <Image src="/svg/noneProduct.svg" alt="None Product" />
      <Text marginTop="34px">아직 입찰하신 상품이 없으시군요:(</Text>
      <Text marginTop="10px" color="#8E8E8E">
        메인화면에서 다양한 상품을 구경하세요!
      </Text>
      <Button
        marginTop="24px"
        padding="10px 30px"
        borderRadius="30px"
        color="white"
        backgroundColor="brand.primary-900"
        onClick={() => router.push(`/`)}
      >
        메인 페이지로 이동하기
      </Button>
    </>
  );
};

export default NoBidProducts;
