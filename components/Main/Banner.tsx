import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Banner = () => {
  //TODO: 슬로건 수정하기
  return (
    <Flex justifyContent="space-between" alignItems="flex-end">
      <Flex direction="column" gap="6px">
        <Text fontSize="lg">
          <Text as="span" color="brand.primary-900">
            비딩
          </Text>
          으로
        </Text>
        <Text fontSize="lg">기다리는 설렘을 느껴봐!</Text>
        <Text fontSize="sm" color="#666666">
          거래는 중고지만 경험은 새롭게!
        </Text>
      </Flex>
      <Box position="relative" top="22px" right="20px">
        <Image
          src="/svg/bidmarket-bibi.svg"
          alt="banner"
          width="66px"
          height="66px"
        />
      </Box>
    </Flex>
  );
};

export default Banner;
