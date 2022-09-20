import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { notificationAPI } from 'apis';
import { SVG_URL } from 'utils';
import distanceTimeFormat from 'utils/format/distanceTimeFormat';

interface NotificationCardProps {
  id: number;
  title: string;
  description: string;
  productId: number;
  productImage: string;
  createdAt: Date;
  checked: boolean;
}

const NotificationCard = ({
  id,
  title,
  description,
  productId,
  productImage,
  createdAt,
  checked,
}: NotificationCardProps) => {
  const router = useRouter();

  const handleNotificationCardClick = async () => {
    await notificationAPI.putCheckNotification({ notificationId: id });
    router.push(`/products/${productId}`);
  };

  return (
    <Box
      cursor="pointer"
      w="100%"
      bg={checked ? '#FFFFFF' : 'brand.primary-100'}
      _hover={{
        bg: 'brand.primary-100',
      }}
      onClick={handleNotificationCardClick}
    >
      <Flex width="100%" padding="15px 0">
        <Image
          src={SVG_URL.BID_PRODUCT_MENU_ICON}
          alt="notification-icon"
          width="44px"
          height="44px"
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
            <Box
              w="71px"
              h="71px"
              minW="71px"
              borderRadius="7px"
              marginLeft="15px"
              overflow="hidden"
            >
              <Image
                width="71px"
                height="71px"
                src={productImage}
                alt="product-image"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NotificationCard;
