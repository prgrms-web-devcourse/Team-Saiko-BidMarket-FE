import { Flex, Image, Input, Text } from '@chakra-ui/react';
import ProductLabel from './ProductLabel';

const AddProductMinimumPrice = () => {
  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image
            src="/CreateProduct/cp1.png"
            alt="amount"
            width="25px"
            height="15px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            최소 금액
          </Text>
        }
      />
      <Flex direction="column" w="100%" alignItems="flex-end">
        <Input placeholder="최소 금액" />
        <Text fontSize="sm" color="#007C14" marginRight="3">
          11,000원
        </Text>
      </Flex>
    </Flex>
  );
};

export default AddProductMinimumPrice;
