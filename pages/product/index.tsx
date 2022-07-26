import { Text } from '@chakra-ui/react';
import Header from '@common/Header';
import GoBackIcon from '@common/Header/GoBackIcon';
import Seo from '@common/Seo';
import CreateProduct from 'components/CreateProduct';
import type { NextPage } from 'next';

const Product: NextPage = () => {
  return (
    <>
      <Seo title="상품등록" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <Text fontWeight="bold" fontSize="20px">
            상품등록
          </Text>
        }
      />
      <CreateProduct />
    </>
  );
};

export default Product;
