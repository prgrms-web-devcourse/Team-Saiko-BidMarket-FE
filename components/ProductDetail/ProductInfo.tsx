import { Divider, Flex, Text } from '@chakra-ui/react';
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
          {DDay === 0 ? 'D-Day' : DDay < 0 ? `마감` : `D-${DDay}`}
        </Text>
        <Text fontSize="lg" marginLeft="10px" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <Flex marginTop="7px">
        <Text as="u" fontSize="sm" color="#838383">
          {category}
        </Text>
        <Divider orientation="vertical" margin="0 10px" />
        <Text fontSize="sm" color="#838383">
          {format(new Date(createdAt), 'M월 d일')}
        </Text>
      </Flex>

      <Text marginTop="14px" whiteSpace="pre-wrap" marginBottom="158px">
        {description}
      </Text>
    </Flex>
  );
};

export default ProductInfo;
