import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { CardProductData } from 'types/product';
import { priceFormat, remainedTimeFormat } from 'utils';

import ProductCardImage from './ProductCardImage';

interface ProductCardProps {
  productInfo: CardProductData;
}

const ProductCard = ({ productInfo }: ProductCardProps) => {
  const { id, title, thumbnailImage, minimumPrice, expireAt, heartCount } =
    productInfo;
  const router = useRouter();

  return (
    <Flex
      padding="15px 0"
      width="100%"
      height="144px"
      cursor="pointer"
      onClick={() => router.push(`/products/${id}`)}
    >
      <ProductCardImage
        alt={`${id}-product-image`}
        src={thumbnailImage || '/svg/basket.svg'}
      />
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
            {priceFormat(minimumPrice)}원
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
            {remainedTimeFormat(expireAt) === ''
              ? '0분'
              : remainedTimeFormat(expireAt)}
          </Text>
        </Flex>
        <Flex justifyContent="flex-end" alignItems="center">
          <StarIcon color="#BFBFBF" w="3" />
          <Text fontSize="xs" marginLeft="5px" paddingRight="5px">
            {heartCount
              ? `${heartCount}명이 이 상품을 찜했어요!`
              : `아직 아무도 찜하지 않았어요!`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
