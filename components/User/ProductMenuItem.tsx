import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Divider, Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  return (
    <>
      <Flex
        width="100%"
        alignItems="center"
        gap="13px"
        onClick={() => router.push(routingUrl)}
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
    </>
  );
};

export default ProductMenuItem;
