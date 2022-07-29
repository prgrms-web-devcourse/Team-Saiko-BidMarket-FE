import { Flex, Image, Text } from '@chakra-ui/react';
import Category from '@common/Category';
import AddProductLocation from './AddProductLocation';
import ProductLabel from './ProductLabel';

const AddProductSales = () => {
  return (
    <Flex direction="column" w="100%" gap="3" marginTop="-2.5">
      <ProductLabel
        LabelImage={
          <Image
            src="/CreateProduct/cp5.png"
            alt="select"
            width="21px"
            height="22px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            판매 설정
          </Text>
        }
      />
      <Flex flexDirection="row" justifyContent="space-between" w="100%">
        <Category />
        <AddProductLocation />
      </Flex>
    </Flex>
  );
};

export default AddProductSales;
