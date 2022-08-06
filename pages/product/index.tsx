import {
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  Image,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';

import { productAPI } from 'apis';
import { Category, Header, GoBackIcon } from 'components/common';
import { SEO } from 'components/common';
import {
  AddProductTitle,
  AddProductImageUpload,
  AddProductMinimumPrice,
  AddProductLocation,
  AddProductDescription,
  SubmitButton,
  ProductLabel,
} from 'components/CreateProduct';
import useForm from 'hooks/useForm';

interface CreateProductProps {
  title: string;
  minimumPrice: number;
  location: string;
  productImageUrl: string;
  category: string;
  productDescription: string;
}

const Product: NextPage = () => {
  const [productInput, setProductInput] = useState();

  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      // title: '안녕하세요',
      // minimumPrice: 100000,
      // location: '서울',
      // images: [
      //   'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/products/project.jpeg',
      // ],
      // category: 'DIGITAL_DEVICE',
    },
    onSubmit: async (data) => {
      await productAPI.createProduct({
        title: '안녕하세요',
        minimumPrice: 100000,
        location: '서울',
        images: [
          'https://bid-market-bucket.s3.ap-northeast-2.amazonaws.com/products/project.jpeg',
        ],
        category: 'DIGITAL_DEVICE',
        description: '안녕하세요 상세정보',
      });
    },

    validate: ({ title, minimumPrice, location, images, category }) => {
      const error: {
        // title?: string;
        // minimumPrice?: string;
        // location?: string;
        // category?: string;
        // images?: string;
      } = {};

      // if (!title) {
      //   error.title = '상품 제목을 입력해주세요.';
      // }

      // if (minimumPrice && parseInt(minimumPrice, 10) < 1000) {
      //   error.minimumPrice = '1000원 이상 입력 가능합니다.';
      // }

      // if (!location) {
      //   error.location = '희망 거래지역을 입력해주세요.';
      // }

      // if (category === '') {
      //   error.category = '카테고리를 선택해주세요.';
      // }

      return error;
    },
  });
  return (
    <>
      <SEO title="상품등록" />
      <form style={{ width: '100%', height: '100%' }} onSubmit={handleSubmit}>
        <Header
          leftContent={<GoBackIcon />}
          middleContent={
            <Text fontWeight="bold" fontSize="20px">
              상품등록
            </Text>
          }
          rightContent={
            <SubmitButton isLoading={isLoading} loadingText={'전송 중'} />
          }
        />
        <Flex
          direction="column"
          alignItems="center"
          paddingLeft="15px"
          paddingRight="15px"
          gap="20px"
          marginTop="10px"
          w="100%"
        >
          <AddProductImageUpload
            name="profileImage"
            productImageUrl={''}
            onChange={handleChange}
          />
          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            // isInvalid={(errors.title as string)?.length > 0 ? true : false}
          >
            <AddProductTitle inputTitle="title" onChange={handleChange} />
            <FormErrorMessage paddingLeft="19px">
              {/* {errors.title as string} */}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            // isInvalid={(errors.minimumPrice as number) > 1000 ? true : false}
          >
            <AddProductMinimumPrice />
            <FormErrorMessage paddingLeft="19px">
              {/* {errors.minimumPrice as string} */}
            </FormErrorMessage>
          </FormControl>
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
              <FormControl w="47%" h="20%">
                <Category onChange={handleChange} />
                <FormErrorMessage paddingLeft="19px">
                  {/* {errors.category as string} */}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                w="47%"
                h="20%"
                // isInvalid={
                //   (errors.location as string)?.length > 0 ? true : false
                // }
              >
                <AddProductLocation
                  inputLocation="location"
                  onChange={handleChange}
                />
                <FormErrorMessage paddingLeft="19px">
                  {/* {errors.location as string} */}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </Flex>
          <AddProductDescription />
        </Flex>
      </form>
    </>
  );
};

export default Product;
