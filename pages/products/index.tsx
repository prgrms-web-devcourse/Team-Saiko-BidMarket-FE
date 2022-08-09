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
import {
  ProductCard,
  GoBackIcon,
  Header,
  SearchInput,
  SEO,
} from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { categoryOptionsENType } from 'types/categoryOption';
import { ProductsResponseType } from 'types/product';
import { sortOptionsENType } from 'types/sortOption';
import { categoryOption, sortOption } from 'utils';

let offset = 0;
let limit = 10;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await productAPI.getProducts({ offset: 0, limit: 10 });
  return { props: { queryDatas: context.query, productsDatas: data } };
};

const Products: NextPage = ({
  queryDatas,
  productsDatas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { title, sort, category, progressed } = queryDatas;
  const [keyword, setKeyword] = useState<string>(title);
  const [selectedSortOption, setSelectedSortOption] =
    useState<sortOptionsENType>(sort);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState<categoryOptionsENType>(category);
  const [isProgressed, setIsProgressed] = useState<boolean>(progressed);
  const [products, setProducts] = useState<ProductsResponseType>(productsDatas);
  const [isMoreButtonLoading, setIsMoreButtonLoading] = useState(false);

  offset = queryDatas.offset;
  limit = queryDatas.limit;

  useEffect(() => {
    router.push(
      `/products?title=${keyword}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=${isProgressed}&offset=0&limit=10`
    );
  }, [keyword, selectedSortOption, selectedCategoryOption, isProgressed]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(
      `/products?title=${keyword}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=${isProgressed}&offset=0&limit=10`
    );
  };

  // @TODO FilterButton과 함께 간결한 코드로 풀어낼 필요 (with Type)
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
    setIsProgressed(!isProgressed);
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
          <SearchInput keyword={keyword} onChange={setKeyword} />
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
            isProgressed={!isProgressed}
            onBidFilterChange={handleBidFilterCheckBoxChange}
          />
        </Flex>
        {products.map((product) => {
          return (
            <Fragment key={product.id}>
              <ProductCard productInfo={product} />
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
