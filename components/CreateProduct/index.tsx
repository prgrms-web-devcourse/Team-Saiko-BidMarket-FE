import {
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Category, Header, GoBackIcon } from 'components/common';
import useForm from 'hooks/useForm';

import AddProductDescription from './AddProductDescription';
import AddProductImageUpload from './AddProductImageUpload';
import AddProductLocation from './AddProductLocation';
import AddProductMinimumPrice from './AddProductMinimumPrice';
import AddProductTitle from './AddProductTitle';
import ProductLabel from './ProductLabel';
import SubmitButton from './SubmitButton';

interface CreateProductProps {
  productName: string;
  productPrice: number;
  productLocation: string;
  productImageUrl: string;
  productCategory: string;
}

const CreateProduct = ({
  productName,
  productPrice,
  productLocation,
  productImageUrl,
  productCategory,
}: CreateProductProps) => {
  const [productInput, setProductInput] = useState();

  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      productName,
      productPrice,
      productLocation,
      productImageUrl,
      productCategory,
    },
    onSubmit: async ({ productName, e }) => {
      const fakeSubmit = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            alert(
              `onSubmit!\n productName: ${productName} \n profileImage: ${e.target.productImageUrl.dataset.url}`
            );
            resolve('Success');
          }, 1500);
        });

      await fakeSubmit();
      setProductInput(productName);
      // setProductInput(productPrice);
      // setProductInput(productLocation);
    },
    validate: ({
      productName,
      productPrice,
      productLocation,
      productCategory,
    }) => {
      const error: {
        productName?: string;
        productPrice?: string;
        productLocation?: string;
        productCategory?: string;
        defalutValue?: string;
      } = {};

      if (!productName) {
        error.productName = '상품 제목을 입력해주세요.';
      }

      if (!productPrice) {
        error.productPrice = '1000원 이상 입력 가능합니다.';
      }

      if (!productLocation) {
        error.productLocation = '희망 거래지역을 입력해주세요.';
      }

      if (productCategory === '') {
        error.productCategory = '카테고리를 선택해주세요.';
      }

      return error;
    },
  });

  return (
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
          productImageUrl={productImageUrl}
          onChange={handleChange}
        />
        <FormControl
          flexGrow="1"
          display="flex"
          flexDirection="column"
          height="20%"
          isInvalid={(errors.productName as string)?.length > 0 ? true : false}
        >
          <AddProductTitle inputTitle="productName" onChange={handleChange} />
          <FormErrorMessage paddingLeft="19px">
            {errors.productName as string}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          flexGrow="1"
          display="flex"
          flexDirection="column"
          height="20%"
          isInvalid={(errors.productPrice as number) > 1000 ? true : false}
        >
          <AddProductMinimumPrice />
          <FormErrorMessage paddingLeft="19px">
            {errors.productPrice as string}
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
                {errors.productCategory as string}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              w="47%"
              h="20%"
              isInvalid={
                (errors.productLocation as string)?.length > 0 ? true : false
              }
            >
              <AddProductLocation
                inputLocation="productLocation"
                onChange={handleChange}
              />
              <FormErrorMessage paddingLeft="19px">
                {errors.productLocation as string}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Flex>
        <AddProductDescription />
      </Flex>
    </form>
  );
};

export default CreateProduct;
