import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Divider, Flex, Text } from '@chakra-ui/react';
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
import { categoryOptionsENType, sortOptionsENType } from 'types/products';
import { categoryOption, sortOption } from 'utils';

let offset = 0;
let limit = 10;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 10 });
  return { props: { queryDatas: context.query, productsProps: data } };
};

const Products: NextPage = ({
  queryDatas,
  productsProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>(queryDatas.title);
  const [selectedSortOption, setSelectedSortOption] =
    useState<sortOptionsENType>(queryDatas.sort);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState<categoryOptionsENType>(queryDatas.category);
  const [progressed, setProgressed] = useState<boolean>(queryDatas.progressed);
  const [products, setProducts] = useState<ProductsResponseType>(productsProps);
  const [isMoreButtonLoading, setIsMoreButtonLoading] = useState(false);

  offset = queryDatas.offset;
  limit = queryDatas.limit;

  useEffect(() => {
    router.push(
      `/products?title=${title}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=${progressed}&offset=0&limit=10`
    );
  }, [title, selectedSortOption, selectedCategoryOption, progressed]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(
      `/products?title=${title}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=true&offset=0&limit=10`
    );
  };
  const handleFilterButtonChange = (
    option: sortOptionsENType | categoryOptionsENType
  ) => {
    if (sortOption.sortOptionsENKeys.includes(option as sortOptionsENType)) {
      setSelectedSortOption(option as sortOptionsENType);
    }
    if (
      categoryOption.categoryOptionsENKeys.includes(
        option as categoryOptionsENType
      )
    ) {
      setSelectedCategoryOption(option as categoryOptionsENType);
    }
  };

  const handleBidFilterCheckBoxChange = () => {
    setProgressed(!progressed);
  };

  // @TODO 메인페이지와 동일한 코드이며 무한 스크롤과 함께 개선 예정
  const handleMoreProductClick = async () => {
    setIsMoreButtonLoading(true);
    offset = offset + 1;
    try {
      const { data } = await productAPI.getProducts({ offset, limit });
      setProducts([...products, ...data]);
      setIsMoreButtonLoading(false);
    } catch (error) {
      offset = offset - 1;
      console.log(error);
      setIsMoreButtonLoading(false);
    }
  };

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
            selectedOption={selectedSortOption}
            onFilterChange={handleFilterButtonChange}
          />
          <FilterButton
            filterName="categoryFilter"
            selectedOption={selectedCategoryOption}
            onFilterChange={handleFilterButtonChange}
          />
        </Flex>
        <Flex width="100%" marginTop="15px">
          <BidFilterCheckBox
            isProgressed={!progressed}
            onBidFilterChange={handleBidFilterCheckBoxChange}
          />
        </Flex>
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
              <Card productInfo={product} />
              <Divider />
            </Fragment>
          );
        })}
        <Button
          alignSelf="center"
          w="100px"
          margin="20px 0"
          borderRadius="30px"
          color="white"
          backgroundColor="brand.primary-900"
          isLoading={isMoreButtonLoading}
          onClick={() => handleMoreProductClick()}
        >
          <DownloadIcon w="5" h="5" />
        </Button>
      </Flex>
    </>
  );
};

export default Products;
