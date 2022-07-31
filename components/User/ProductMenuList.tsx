import { ChevronRightIcon } from '@chakra-ui/icons';
import { Image, Flex, Text, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

interface ProductMenu {
  iconUrl: string;
  title: string;
  routingUrl: string;
}

interface ProductMenuListProps {
  productMenues: Array<ProductMenu>;
}

const ProductMenuList = ({ productMenues }: ProductMenuListProps) => {
  const router = useRouter();

  return (
    <Flex width="100%" direction="column" gap="12px" marginTop="21px">
      {productMenues.map(({ iconUrl, title, routingUrl }, index) => (
        <Fragment key={index}>
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
          {index !== productMenues.length - 1 ? <Divider /> : undefined}
        </Fragment>
      ))}
    </Flex>
  );
};

export default ProductMenuList;
