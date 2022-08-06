import { Divider, Flex, Text } from '@chakra-ui/react';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { productAPI } from 'apis';
import { Card, GoBackIcon, Header, SearchInput, SEO } from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { ProductsResponseType } from 'types/product';

let offset = 0;
let limit = 10;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 5 });
  return { props: { queryDatas: context.query, productsProps: data } };
};

const Products: NextPage = ({
  queryDatas,
  productsProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, setTitle] = useState(queryDatas.title);
  const [selectedSortOption, setSelectedSortOption] = useState(queryDatas.sort);
  const [selectedCategoryOption, setSelectedCategoryOption] = useState(
    queryDatas.category
  );
  const [progressed, setProgressed] = useState(queryDatas.progressed);
  const [products, setProducts] = useState<ProductsResponseType>(productsProps);
  offset = queryDatas.offset;
  limit = queryDatas.limit;

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // const categoryQuery = category
    router.push(
      `/products?title=${title}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=true&offset=0&limit=10`
    );
  };

  useEffect(() => {
    router.push(
      `/products?title=${title}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=true&offset=0&limit=10`
    );
  }, [selectedSortOption, selectedCategoryOption]);

  return (
    <>
      <SEO title="검색" />
      <Header leftContent={<GoBackIcon />} middleContent={<Text>검색</Text>} />
      <Flex direction="column" w="100%">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <SearchInput keyword={title} onChange={setTitle} />
        </form>
        <Divider marginTop="18px" />
        <Flex width="100%" gap="18px" marginTop="15px">
          <FilterButton
            filterName="sortFilter"
            selectedSortOption={selectedSortOption}
            handleFilterChange={setSelectedSortOption}
          />
          <FilterButton
            filterName="categoryFilter"
            selectedCategoryOption={selectedCategoryOption}
            handleFilterChange={setSelectedCategoryOption}
          />
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
