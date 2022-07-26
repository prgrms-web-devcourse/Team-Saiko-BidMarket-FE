import { Button, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from '@common/Header';
import GoBackIcon from '@common/Header/GoBackIcon';
import SEO from '@common/SEO';
import CreateProduct from 'components/CreateProduct';

const Product: NextPage = () => {
  return (
    <>
      <SEO title="상품등록" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <Text fontWeight="bold" fontSize="20px">
            상품등록
          </Text>
        }
        rightContent={
          <Button
            w="55px"
            h="29px"
            fontSize="14px"
            bg="#FF4370"
            color="#FFFFFF"
            marginRight="5px"
          >
            완료
          </Button>
        }
      />
      <CreateProduct />
    </>
  );
};

export default Product;
