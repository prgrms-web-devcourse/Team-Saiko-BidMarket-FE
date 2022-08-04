import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { CardProductData } from 'types/product';

import CardImage from './CardImage';

interface CardProps {
  productInfo: CardProductData;
}

const Card = ({ productInfo }: CardProps) => {
  const { id, title, thumbnailImage, minimumPrice, expireAt } = productInfo;
  const router = useRouter();

  return (
    <Flex
      padding="15px 0"
      width="100%"
      height="144px"
      cursor="pointer"
      onClick={() => router.push(`/products/${id}`)}
    >
      <CardImage alt="abc" src={thumbnailImage || '/svg/basket.svg'} />
      <Flex direction="column" paddingLeft="15px" width="100%" gap="5px">
        <Text fontSize="lg">{title}</Text>
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
            {minimumPrice}
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
            {expireAt.toString()}
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
