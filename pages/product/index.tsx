import type { NextPage } from 'next';

import { SEO } from 'components/common';
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
