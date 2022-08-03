import { Flex, Text } from '@chakra-ui/react';
import { differenceInDays, format } from 'date-fns';

interface ProductInfoProps {
  title: string;
  description: string;
  category: string;
  location: string;
  createdAt: Date;
  expireAt: Date;
}

const ProductInfo = ({
  title,
  description,
  category,
  location,
  createdAt,
  expireAt,
}: ProductInfoProps) => {
  const DDay = differenceInDays(new Date(expireAt), new Date());

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
          D-{DDay === 0 ? 'Day' : DDay}
        </Text>
        <Text fontSize="lg" marginLeft="10px" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <Text fontSize="sm" color="#838383" marginTop="7px">
        {format(new Date(createdAt), 'M월 d일')}
      </Text>
      <Text marginTop="14px" whiteSpace="pre-wrap" marginBottom="158px">
        {description}
      </Text>
    </Flex>
  );
};

export default ProductInfo;
