import { Flex, Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface ProductSellerProps {
  userId: string;
  name: string;
  thumbnailImg: string;
}

const ProductSeller = ({ userId, name, thumbnailImg }: ProductSellerProps) => {
  const router = useRouter();

  return (
    <Box
      _hover={{ cursor: 'pointer' }}
      onClick={() => router.push(`/user/${userId}`)}
    >
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
    </Box>
  );
};

export default ProductSeller;
