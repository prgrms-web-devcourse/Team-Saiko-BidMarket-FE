import { Divider, Flex, Text } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

import { Card, GoBackIcon, Header, SearchInput, SEO } from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { CardProductData } from 'types/product';

const DUMMY_DATA: Array<CardProductData> = [];

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  return { props: { queryDatas: context.query } };
};

const Products = ({
  queryDatas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState(queryDatas.title);
  const [products, setProducts] = useState(DUMMY_DATA);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`products?title=${keyword}&progressed=true&offset=0&limit=10`);
  };

  return (
    <>
      <SEO title="검색" />
      <Header leftContent={<GoBackIcon />} middleContent={<Text>검색</Text>} />
      <Flex direction="column" w="100%">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <SearchInput keyword={keyword} onChange={setKeyword} />
        </form>
        <Divider marginTop="18px" />
        <Flex width="100%" gap="18px" marginTop="15px">
          <FilterButton filterName="sortFilter" />
          <FilterButton filterName="categoryFilter" />
        </Flex>
        <Flex width="100%" marginTop="15px">
          <BidFilterCheckBox />
        </Flex>
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
              <Card productInfo={product} />
              <Divider />
            </Fragment>
          );
        })}
      </Flex>
    </>
  );
};

export default Products;
