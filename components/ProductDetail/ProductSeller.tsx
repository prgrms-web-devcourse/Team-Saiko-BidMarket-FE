import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ProductSellerProps {
  userId: number;
  name: string;
  profileImage: string;
}

const ProductSeller = ({ userId, name, profileImage }: ProductSellerProps) => {
  const router = useRouter();

  return (
    <Box
      _hover={{ cursor: 'pointer' }}
      onClick={() => router.push(`/user/${userId}`)}
    >
      <Flex alignItems="center">
        <Box
          w="45px"
          h="45px"
          borderRadius="50%"
          marginTop="14px"
          marginBottom="14px"
          border="1px"
          borderColor="brand.primary-900"
          overflow="hidden"
        >
          <Image
            alt="profile-image"
            src={profileImage}
            width="45px"
            height="45px"
          />
        </Box>
        <Text fontWeight="bold" marginLeft="14px">
          {name === 'UnKnown' ? '알 수 없음' : name}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProductSeller;
