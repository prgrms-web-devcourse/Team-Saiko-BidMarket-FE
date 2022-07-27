import { Flex, Image, Input, Text } from '@chakra-ui/react';
import ProductLabel from './ProductLabel';

const AddProductTitle = () => {
  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image
            src="/CreateProduct/cp2.png"
            alt="title"
            width="30px"
            height="30px"
            marginLeft="-4px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            상품 제목
          </Text>
        }
      />
      <Input placeholder="상품 제목" />
    </Flex>
  );
};

export default AddProductTitle;
