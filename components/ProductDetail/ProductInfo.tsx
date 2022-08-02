import { Flex, Text } from '@chakra-ui/react';

interface ProductInfoProps {
  title: string;
  description: string;
  category: string;
  location: string;
  createdAt: Date;
}

const ProductInfo = ({
  title,
  description,
  category,
  location,
  createdAt,
}: ProductInfoProps) => {
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
          {title}
        </Text>
      </Flex>
      <Text fontSize="sm" color="#838383" marginTop="7px">
        {createdAt.toString()}
      </Text>
      <Text marginTop="14px" whiteSpace="pre-wrap" marginBottom="158px">
        {description}
      </Text>
    </Flex>
  );
};

export default ProductInfo;
