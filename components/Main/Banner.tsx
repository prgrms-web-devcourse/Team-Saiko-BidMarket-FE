import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Banner = () => {
  //TODO: 슬로건 수정하기
  return (
    <Flex justifyContent="space-between" alignItems="flex-end">
      <Flex direction="column" gap="6px">
        <Text fontSize="lg">
          <Text as="span" color="brand.primary-900">
            비딩
          </Text>
          을 통한
        </Text>
        <Text fontSize="lg">현명한 중고 거래</Text>
        <Text fontSize="sm" color="#666666">
          원하는 가격에 팔고, 좋은 물건은 싸게 산다!
        </Text>
      </Flex>
      <Box position="relative" top="15px" right="20px">
        <Image src="/svg/bidmarket-bibi.svg" alt="banner" height="65" />
      </Box>
    </Flex>
  );
};

export default Banner;
