import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Divider, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
interface ProductMenuItemProps {
  iconUrl: string;
  title: string;
  routingUrl: string;
  isLastItem: boolean;
}

const ProductMenuItem = ({
  iconUrl,
  title,
  routingUrl,
  isLastItem,
}: ProductMenuItemProps) => {
  return (
    <Link href={routingUrl} passHref>
      <a>
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          gap="13px"
          cursor="pointer"
        >
          <Flex justifyContent="space-between" alignItems="center" gap="10px">
            <Image
              width="33.92px"
              height="38px"
              src={iconUrl}
              alt={`${title} 아이콘`}
            />
            <Text
              color="brand.dark"
              fontFamily="Roboto"
              fontStyle="normal"
              fontSize="16px"
              lineHeight="128.19%"
            >
              {title}
            </Text>
          </Flex>
          <ChevronRightIcon />
        </Flex>
        {!isLastItem && <Divider />}
      </a>
    </Link>
  );
};

export default ProductMenuItem;
