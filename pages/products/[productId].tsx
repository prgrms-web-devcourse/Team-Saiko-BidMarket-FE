import { StarIcon } from '@chakra-ui/icons';
import { Divider, Flex, Box } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import { productAPI, userAPI } from 'apis';
import { getItem } from 'apis/utils/storage';
import { GoBackIcon, SEO } from 'components/common';
import {
  ProductBid,
  ProductImage,
  ProductInfo,
  ProductSeller,
} from 'components/ProductDetail';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query;
  const { data } = await productAPI.getProduct(Number(productId));

  return {
    props: {
      product: data,
    },
  };
};

const ProductDetail = ({
  product: {
    title,
    description,
    minimumPrice,
    category,
    location,
    writer,
    images,
    expireAt,
    createdAt,
  },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [authUserId, setAuthUserId] = useState('');

  useEffect(() => {
    setAuthUserInfo();
  }, []);

  const setAuthUserInfo = async () => {
    try {
      if (!getItem('token')) {
        return;
      }

      const { encodedId } = (await userAPI.getAuthUser()).data;
      setAuthUserId(encodedId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SEO title={title} description={description} />
      <Box position="absolute">
        <ProductImage images={images} />
      </Box>
      <Box position="absolute" left="15px" top="20px" cursor="pointer">
        {/* //TODO 색상 props 적용 */}
        <GoBackIcon />
      </Box>
      <Flex direction="column" width="100%" marginTop="317px">
        <Flex justifyContent="space-between" alignItems="center">
          <ProductSeller
            id={writer.encodedId}
            name={writer.username}
            thumbnailImg={writer.thumbnailImg}
          />
          <StarIcon w="23px" color="brand.primary-900" />
        </Flex>
        <Divider />
        <ProductInfo
          title={title}
          description={description}
          category={category}
          location={location}
          createdAt={createdAt}
          expireAt={expireAt}
        />
        <ProductBid
          writerId={writer.encodedId}
          authUserId={authUserId}
          minimumPrice={minimumPrice}
          expireAt={expireAt}
        />
      </Flex>
    </>
  );
};

export default ProductDetail;
