import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import distanceTimeFormat from 'utils/format/distanceTimeFormat';

interface NotificationProps {
  title: string;
  description: string;
  productId: number;
  productImage: string;
  createdAt: Date;
}

const Notification = ({
  title,
  description,
  productId,
  productImage,
  createdAt,
}: NotificationProps) => {
  const router = useRouter();

  return (
    <Box
      cursor="pointer"
      w="100%"
      _hover={{ bg: '#FFF6F7' }}
      onClick={() => router.push(`/products/${productId}`)}
    >
      <Flex width="100%" padding="15px 0">
        <Image
          src="/svg/bidProductMenuIcon.svg"
          alt="notification-icon"
          w="44px"
          h="44px"
        />
        <Flex width="100%" direction="column" paddingLeft="10px">
          <Text fontWeight="bold">{title}</Text>
          <Flex>
            <Flex direction="column" flexGrow="1">
              <Text width="100%" paddingTop="5px">
                {description}
              </Text>
              <Text color="brand.dark-light">
                {distanceTimeFormat(new Date(createdAt))}
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
