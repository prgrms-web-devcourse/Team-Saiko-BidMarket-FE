import { StarIcon } from '@chakra-ui/icons';
import { Divider, Flex, Box, Image } from '@chakra-ui/react';
import { format } from 'date-fns';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import { productAPI } from 'apis';
import { GoBackIcon, SEO } from 'components/common';
import {
  ProductBid,
  ProductImage,
  ProductInfo,
  ProductSeller,
} from 'components/ProductDetail';
import useLoginUser from 'hooks/useLoginUser';

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
  const router = useRouter();
  const { id: authUserId } = useLoginUser();
  const isSeller = authUserId === writer.id;

  const handleReportSirenIconClick = () => {
    router.push(
      {
        pathname: `/reports`,
        query: {
          isProduct: true,
          title,
          image: images[0].url,
          writer: writer.username,
          createdAt: format(new Date(createdAt), 'M월 d일'),
        },
      },
      '/reports'
    );
  };

  return (
    <>
      <SEO title={title} description={description} />
      <Box position="absolute" maxWidth="768px" width="100%">
        <ProductImage images={images} />
      </Box>
      <Box
        position="absolute"
        zIndex={3}
        left="15px"
        top="20px"
        cursor="pointer"
      >
        {/* //TODO 색상 props 적용 */}
        <GoBackIcon />
      </Box>
      <Box
        position="absolute"
        right="15px"
        top="20px"
        cursor="pointer"
        onClick={handleReportSirenIconClick}
      >
        {!isSeller && <Image src="/svg/siren.svg" alt="siren-icon" />}
      </Box>
      <Flex direction="column" width="100%" marginTop="317px">
        <Flex justifyContent="space-between" alignItems="center">
          <ProductSeller
            userId={writer.id}
            name={writer.username}
            profileImage={writer.profileImage}
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
          writerId={writer.id}
          authUserId={authUserId}
          minimumPrice={minimumPrice}
          expireAt={expireAt}
        />
      </Flex>
    </>
  );
};

export default ProductDetail;
