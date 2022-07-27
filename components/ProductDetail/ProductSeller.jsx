import { Flex, Image, Text } from '@chakra-ui/react';

const SellerInfo = () => {
  return (
    <Flex alignItems="center">
      <Image
        alt="profile-image"
        src="https://bit.ly/code-beast"
        w="45px"
        h="45px"
        borderRadius="50%"
        marginTop="14px"
        marginBottom="14px"
        border="1px"
        borderColor="brand.primary-900"
      />
      <Text fontWeight="bold" marginLeft="14px">
        워터
      </Text>
    </Flex>
  );
};

export default SellerInfo;
