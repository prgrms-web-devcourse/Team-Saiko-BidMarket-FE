import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductSellerProps {
  userId: number;
  name: string;
  profileImage: string;
}

const ProductSeller = ({ userId, name, profileImage }: ProductSellerProps) => {
  return (
    <Link href={`/user/${userId}`} passHref>
      <a>
        <Box _hover={{ cursor: 'pointer' }}>
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
      </a>
    </Link>
  );
};

export default ProductSeller;
