import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

import { SVG_URL } from 'utils';

import { ProductMenuItem } from '.';

interface ProductMenuListProps {
  userId: number;
  isMyPage: boolean;
}

const ProductMenuList = ({ userId, isMyPage }: ProductMenuListProps) => {
  const productMenu = [
    {
      iconUrl: SVG_URL.SELL_PRODUCT_MENU_ICON,
      title: '판매 상품',
      routingUrl: `./${userId}/products/sell`,
    },
    {
      iconUrl: SVG_URL.BID_PRODUCT_MENU_ICON,
      title: '입찰 상품',
      routingUrl: `./${userId}/products/bid`,
    },
    {
      iconUrl: SVG_URL.LIKE_PRODUCT_MENU_ICON,
      title: '찜한 상품',
      routingUrl: `./${userId}/products/like`,
    },
  ];

  if (!isMyPage) {
    return (
      <Flex direction="column" width="100%" gap="12px" marginTop="21px">
        <ProductMenuItem {...productMenu[0]} isLastItem={true} />
      </Flex>
    );
  }

  return (
    <Flex direction="column" width="100%" gap="12px" marginTop="21px">
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
