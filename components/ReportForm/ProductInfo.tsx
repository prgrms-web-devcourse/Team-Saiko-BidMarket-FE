import { Divider, Flex, Image, Text } from '@chakra-ui/react';

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
      <Image
        w="90px"
        h="90px"
        src={image}
        alt={`${title}-image`}
        borderRadius="7px"
      />
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
