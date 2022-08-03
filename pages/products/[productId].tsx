import { StarIcon } from '@chakra-ui/icons';
import { Divider, Flex } from '@chakra-ui/react';
import type { InferGetServerSidePropsType } from 'next';

import { productAPI } from 'apis';
import { SEO } from 'components/common';
import {
  ProductBid,
  ProductImage,
  ProductInfo,
  ProductSeller,
} from 'components/ProductDetail';

export const getServerSideProps = async (context: any) => {
  const { productId } = context.query;
  const { data } = await productAPI.getProduct(productId);

  return {
    props: {
      product: data,
    },
  };
};

const ProductDetail = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    title,
    description,
    minimumPrice,
    category,
    location,
    writer,
    images,
    expireAt,
    createdAt,
  } = product;

  return (
    <>
      <SEO title={title} description={description} />
      <Flex direction="column" width="100%">
        <ProductImage images={images} />
        <Flex justifyContent="space-between" alignItems="center">
          <ProductSeller
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
        <ProductBid minimumPrice={minimumPrice} expireAt={expireAt} />
      </Flex>
    </>
  );
};

export default ProductDetail;
