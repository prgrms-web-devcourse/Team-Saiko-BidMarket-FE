import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

import { ProductMenuItem } from '.';

interface ProductMenuListProps {
  userId: string;
}

const ProductMenuList = ({ userId }: ProductMenuListProps) => {
  const productMenu = [
    {
      iconUrl: '/svg/sellProductMenuIcon.svg',
      title: '판매한 상품',
      routingUrl: `./${userId}/products/sell`,
    },
    {
      iconUrl: '/svg/bidProductMenuIcon.svg',
      title: '입찰한 상품',
      routingUrl: `./${userId}/products/bid`,
    },
    {
      iconUrl: '/svg/likeProductMenuIcon.svg',
      title: '찜한 상품',
      routingUrl: `./${userId}/products/like`,
    },
  ];

  return (
    <Flex width="100%" direction="column" gap="12px" marginTop="21px">
      {productMenu.map((currentMenu, index) => (
        <Fragment key={index}>
          <ProductMenuItem
            {...currentMenu}
            isLastItem={index === productMenu.length - 1}
          />
        </Fragment>
      ))}
    </Flex>
  );
};

export default ProductMenuList;
