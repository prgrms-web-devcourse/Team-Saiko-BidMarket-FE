import { Flex, Text } from '@chakra-ui/react';

const ProductInfo = () => {
  return (
    <Flex direction="column">
      <Flex marginTop="14px" alignItems="center">
        <Text
          fontSize="sm"
          color="white"
          backgroundColor="brand.primary-900"
          padding="3px 10px"
          borderRadius="20px"
          fontWeight="bold"
        >
          D-1
        </Text>
        <Text fontSize="lg" marginLeft="10px" fontWeight="bold">
          춘식이가 먹다 남은 귤
        </Text>
      </Flex>
      <Text fontSize="sm" color="#838383" marginTop="7px">
        10월 27일
      </Text>
      <Text marginTop="14px" whiteSpace="pre-wrap" marginBottom="158px">
        라이언이 키우는 춘식이! 고구마를 제일 좋아하지만 겨울에 이불을 덮고 귤을
        까먹는 맛이 있죠잉~ 귀여운 춘식이가 먹다 남은 귤 모음! 가볍게 만원부터
        시작하겠습니다.
      </Text>
    </Flex>
  );
};

export default ProductInfo;
