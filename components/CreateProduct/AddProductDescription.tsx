import { Flex, Image, Text, Textarea } from '@chakra-ui/react';
import ProductLabel from './ProductLabel';

const AddProductDescription = () => {
  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image
            src="/CreateProduct/cp3.png"
            alt="contents"
            width="20px"
            height="21px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            상세 내용
          </Text>
        }
      />
      <Textarea
        placeholder="상품 내용 작성"
        border="1px"
        borderColor="#B6B6B6"
        h="240px"
        maxLength={300}
      />
    </Flex>
  );
};

export default AddProductDescription;
