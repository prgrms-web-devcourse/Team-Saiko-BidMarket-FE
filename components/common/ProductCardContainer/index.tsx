import { Divider } from '@chakra-ui/react';

import { CardProductData } from 'types/product';

import ProductCard from '../ProductCard';

interface ProductCardContainerProps {
  product: CardProductData;
}

const ProductCardContainer = ({ product }: ProductCardContainerProps) => {
  return (
    <>
      <ProductCard productInfo={product} />
      <Divider />
    </>
  );
};

export default ProductCardContainer;
