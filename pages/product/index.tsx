
import SEO from '@common/SEO';
import CreateProduct from 'components/CreateProduct';

import type { NextPage } from 'next';

import { Header, GoBackIcon, SEO } from 'components/common';
import CreateProduct from 'components/CreateProduct';

const Product: NextPage = () => {
  return (
    <>
      <SEO title="상품등록" />
      <CreateProduct
        productName=""
        productPrice={0}
        productLocation=""
        productCategory=""
        productImageUrl=""
      />
    </>
  );
};

export default Product;
