import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import CardImage from './CardImage';

interface CardProps {
  productId?: string;
}

const Card = ({ productId }: CardProps) => {
  const router = useRouter();

  return (
    <Flex
      padding="15px 0"
      width="100%"
      height="144px"
      cursor="pointer"
      onClick={() => router.push(`/products/${productId}`)}
    >
      <CardImage alt="abc" src="https://bit.ly/code-beast" />
      <Flex direction="column" paddingLeft="15px" width="100%" gap="5px">
        <Text fontSize="lg">먹다 남은 케이크</Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="brand.primary-900">
            시작가
          </Text>
          <Text
            fontSize="sm"
            bg="brand.primary-100"
            color="brand.primary-900"
            padding="3px 10px"
            borderRadius="20px"
            fontWeight="bold"
          >
            10,000원
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="sm">남은 시간</Text>
          <Text
            fontSize="sm"
            bg="#EFEFEF"
            padding="3px 10px"
            borderRadius="20px"
          >
            01일 22시간 22분 40초
          </Text>
        </Flex>
        <Flex justifyContent="flex-end" alignItems="center">
          <StarIcon color="#BFBFBF" />
          <Text fontSize="sm" marginLeft="5px">
            3
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
