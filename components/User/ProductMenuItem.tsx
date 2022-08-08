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
        flexDirection="column"
        alignItems="center"
        gap="13px"
        onClick={() => router.push(routingUrl)}
      >
        <Image
          width="33.92px"
          height="38px"
          src={iconUrl}
          alt={`${title} 아이콘`}
        />
        <Text
          flexGrow="1"
          color="brand.dark"
          fontFamily="Roboto"
          fontStyle="normal"
          fontWeight="400"
          fontSize="14"
          lineHeight="128.19%"
        >
          {title}
        </Text>
      </Flex>
      {!isLastItem && (
        <Divider
          orientation="vertical"
          border="3px solid #EFEFEF"
          height="20px"
        />
      )}
    </>
  );
};

export default ProductMenuItem;
