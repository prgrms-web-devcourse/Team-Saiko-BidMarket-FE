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
import { Product } from 'types/product';

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
    imageUrls,
    expireAt,
    createdAt,
  } = product as Product;

  return (
    <>
      <SEO title={title} description={description} />
      <Flex direction="column" width="100%">
        <ProductImage />
        <Flex justifyContent="space-between" alignItems="center">
          <ProductSeller
            name={writer.name}
            profileImageUrl={writer.profileImageUrl}
          />
          <StarIcon w="22px" color="brand.primary-900" />
        </Flex>
        <Divider />
        <ProductInfo
          title={title}
          description={description}
          category={category}
          location={location}
          createdAt={createdAt}
        />
        <ProductBid minimumPrice={minimumPrice} expireAt={expireAt} />
      </Flex>
    </>
  );
};

export default ProductDetail;
