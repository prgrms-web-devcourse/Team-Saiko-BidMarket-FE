import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ProductInfoProps {
  productInfo: {
    title: string;
    image: string;
    writer: string;
    createdAt: string;
  };
}

const ProductInfo = ({ productInfo }: ProductInfoProps) => {
  const { title, image, writer, createdAt } = productInfo;

  return (
    <Flex gap="15px" alignItems="center">
      <Box borderRadius="7px" overflow="hidden" w="90px" h="90px">
        <Image width="90px" height="90px" src={image} alt={`${title}-image`} />
      </Box>
      <Flex direction="column">
        <Text>{title}</Text>
        <Flex marginTop="5px" gap="10px">
          <Text fontSize="sm" color="brand.dark-light">
            {writer}
          </Text>
          <Divider orientation="vertical" />
          <Text fontSize="sm" color="brand.dark-light">
            {createdAt}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductInfo;
