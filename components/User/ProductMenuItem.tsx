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
        gap="17px"
        onClick={() => router.push(routingUrl)}
      >
        <Image src={iconUrl} alt={`${title} 아이콘`} />
        <Text
          flexGrow="1"
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight="400"
          fontSize="16"
        >
          {title}
        </Text>
        <ChevronRightIcon justifySelf="flex-end" />
      </Flex>
      {!isLastItem ? <Divider /> : undefined}
    </>
  );
};

export default ProductMenuItem;
