import {
  Flex,
  FormControl,
  FormErrorMessage,
  Text,
  Image,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { productAPI } from 'apis';
import { Header, GoBackIcon, HeaderTitle } from 'components/common';
import { SEO } from 'components/common';
import {
  AddProductTitle,
  AddProductImageUpload,
  AddProductMinimumPrice,
  AddProductLocation,
  AddProductDescription,
  SubmitButton,
  ProductLabel,
  AddProductCategory,
} from 'components/CreateProduct';
import useForm from 'hooks/useForm';
import { categoryOptionsENType } from 'types/categoryOption';
import productFormValidation from 'utils/validation/productFormValidation';

const Product: NextPage = () => {
  const router = useRouter();
  const [productImageArray, setProductImageArray] = useState<string[]>([]);
  const [categoryEN, setCategoryEN] = useState<string>('');
  const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      title: '',
      minimumPrice: 0,
      location: '',
      images: [''],
      category: '',
      description: '',
    },
    onSubmit: async ({ title, minimumPrice, location, description, e }) => {
      const data = {
        title: title.trim(),
        minimumPrice,
        location: location.trim(),
        images: productImageArray,
        category: categoryEN as categoryOptionsENType,
        description: description.trim(),
      };
      try {
        const { data: productData } = await productAPI.createProduct(data);
        router.push(`/products/${productData.productId}`);
      } catch (err) {
        console.log('안됐습니다.');
      }
    },

    validate: productFormValidation,
  });
  return (
    <>
      <SEO title="상품등록" />
      <form style={{ width: '100%', height: '100%' }} onSubmit={handleSubmit}>
        <Header
          leftContent={<GoBackIcon />}
          middleContent={<HeaderTitle title="상품 등록" />}
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
          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            isInvalid={(values.images as string[])?.length > 0 ? false : true}
          >
            <AddProductImageUpload
              name="productImage"
              productImageArray={productImageArray}
              setProductImageArray={setProductImageArray}
            />
            <FormErrorMessage paddingLeft="19px">
              {errors.images as string}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            isInvalid={(values.title as string)?.length > 0 ? false : true}
          >
            <AddProductTitle inputTitle="title" onChange={handleChange} />
            <FormErrorMessage paddingLeft="19px">
              {errors.title as string}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            isInvalid={Number(values.minimumPrice) > 1000 ? false : true}
          >
            <AddProductMinimumPrice
              inputMinimumPrice="minimumPrice"
              onChange={handleChange}
            />
            <FormErrorMessage position="relative" top="-5" paddingLeft="19px">
              {errors.minimumPrice as string}
            </FormErrorMessage>
          </FormControl>
          <Flex direction="column" w="100%" gap="3" marginTop="-2.5">
            <ProductLabel
              LabelImage={
                <Image
                  src="/svg/setting.svg"
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
              <FormControl
                w="47%"
                h="20%"
                isInvalid={categoryEN === '' ? true : false}
              >
                <AddProductCategory onChange={setCategoryEN} />
                <FormErrorMessage paddingLeft="19px">
                  {errors.category as string}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                w="47%"
                h="20%"
                isInvalid={
                  (values.location as string)?.length > 0 ? false : true
                }
              >
                <AddProductLocation
                  inputLocation="location"
                  onChange={handleChange}
                />
                <FormErrorMessage paddingLeft="19px">
                  {errors.location as string}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </Flex>
          <FormControl
            flexGrow="1"
            display="flex"
            flexDirection="column"
            height="20%"
            isInvalid={
              (values.description as string)?.length > 0 ? false : true
            }
          >
            <AddProductDescription
              inputTitle="description"
              onChange={handleChange}
            />
            <FormErrorMessage paddingLeft="19px">
              {errors.description as string}
            </FormErrorMessage>
          </FormControl>
        </Flex>
      </form>
    </>
  );
};

export default Product;
