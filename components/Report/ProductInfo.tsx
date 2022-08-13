import { Divider, Flex, Image, Text } from '@chakra-ui/react';

const ProductInfo = () => {
  return (
    <Flex gap="15px">
      <Image
        w="90px"
        h="90px"
        src="/svg/basket.svg"
        alt={`image`}
        borderRadius="7px"
      />
      <Flex direction="column">
        <Text>춘식이가 먹다 남긴 귤</Text>
        <Text fontSize="sm" color="brand.dark-light">
          라이언이 키우는 춘식이! 고구마를 제일 좋아아아아아아아아아ㅏㅇ...
        </Text>
        <Flex marginTop="5px" gap="10px">
          <Text fontSize="sm" color="brand.dark-light">
            워터
          </Text>
          <Divider orientation="vertical" />
          <Text fontSize="sm" color="brand.dark-light">
            10월 27일
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductInfo;
