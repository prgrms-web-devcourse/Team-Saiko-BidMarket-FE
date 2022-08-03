import { Flex, Image, Text } from '@chakra-ui/react';

interface ProductSeller {
  name: string;
  thumbnailImg: string;
}

const ProductSeller = ({ name, thumbnailImg }: ProductSeller) => {
  return (
    <Flex alignItems="center">
      <Image
        alt="profile-image"
        src={thumbnailImg}
        w="45px"
        h="45px"
        borderRadius="50%"
        marginTop="14px"
        marginBottom="14px"
        border="1px"
        borderColor="brand.primary-900"
      />
      <Text fontWeight="bold" marginLeft="14px">
        {name}
      </Text>
    </Flex>
  );
};

export default ProductSeller;
