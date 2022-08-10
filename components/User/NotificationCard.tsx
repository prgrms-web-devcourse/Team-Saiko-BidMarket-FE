import { Box, Flex, Image, Text } from '@chakra-ui/react';

import distanceTimeFormat from 'utils/format/distanceTimeFormat';

interface NotificationProps {
  title: string;
  description: string;
  iconImage: string;
  productImage: string;
  createdAt: Date;
}

const Notification = ({
  title,
  description,
  iconImage,
  productImage,
  createdAt,
}: NotificationProps) => {
  return (
    <Box cursor="pointer" _hover={{ bg: '#FFF6F7' }}>
      <Flex width="100%" padding="15px 0">
        <Image src={iconImage} alt="icon-image" w="44px" h="44px" />
        <Flex width="100%" direction="column" paddingLeft="10px">
          <Text fontWeight="bold">{title}</Text>
          <Flex>
            <Flex direction="column">
              <Text width="100%" paddingTop="5px">
                {description}
              </Text>
              <Text color="brand.dark-light">
                {distanceTimeFormat(createdAt)}
              </Text>
            </Flex>
            <Image
              w="71px"
              h="71px"
              minWidth="71px"
              src={productImage}
              alt="product-image"
              borderRadius="7px"
              objectFit="cover"
              marginLeft="15px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Notification;
