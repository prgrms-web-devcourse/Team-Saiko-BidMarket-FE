import { Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

import { ProductMenuItem } from '.';

interface ProductMenu {
  iconUrl: string;
  title: string;
  routingUrl: string;
}

interface ProductMenuListProps {
  productMenues: Array<ProductMenu>;
}

const ProductMenuList = ({ productMenues }: ProductMenuListProps) => {
  return (
    <Flex width="100%" direction="column" gap="12px" marginTop="21px">
      {productMenues.map((productMenuProp, index) => (
        <Fragment key={index}>
          <ProductMenuItem
            {...productMenuProp}
            isLastItem={index === productMenues.length - 1}
          />
        </Fragment>
      ))}
    </Flex>
  );
};

export default ProductMenuList;
