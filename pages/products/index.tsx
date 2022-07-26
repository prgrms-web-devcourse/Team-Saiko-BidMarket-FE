import { Center, Divider, Flex, Text } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  GoBackIcon,
  Header,
  SearchInput,
  SEO,
  ProductCardContainer,
  HeaderTitle,
} from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { useGetProductsByKeyword } from 'hooks/queries';
import { categoryOptionsENType } from 'types/categoryOption';
import { sortOptionsENType } from 'types/sortOption';
import { categoryOption, sortOption, SVG_URL } from 'utils';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { queryDatas: query } };
};

const initialSortOption = 'END_DATE_ASC';
const initialCategoryOption = 'ALL';
const initialProgressedOption = true;

const Products = ({
  queryDatas: { title },
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>(title);
  const [selectedSortOption, setSelectedSortOption] =
    useState<sortOptionsENType>(initialSortOption);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState<categoryOptionsENType>(initialCategoryOption);
  const [isProgressed, setIsProgressed] = useState<boolean>(
    initialProgressedOption
  );

  // @TODO 쿼리스트링이 누락된 경우 메인페이지로 이동하는 예외처리
  const {
    data: productPages,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useGetProductsByKeyword({
    title: keyword,
    progressed: isProgressed,
    category: selectedCategoryOption,
    sort: selectedSortOption,
  });
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, productPages, fetchNextPage, hasNextPage]);

  useEffect(() => {
    refetch();
  }, [selectedSortOption, selectedCategoryOption, isProgressed, refetch]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/products?title=${keyword}`);
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

  return (
    <>
      <SEO title="검색" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="검색" />}
      />
      <Flex direction="column" w="100%" h="100%">
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
        {productPages?.pages.map(({ data }, pageIndex) => {
          return data.map((product, productIndex) => {
            const lastPageIndex = productPages.pages.length - 1;
            const lastProductIndex = data.length - 1;
            const isLastProduct =
              lastPageIndex === pageIndex && lastProductIndex === productIndex;
            return isLastProduct ? (
              <div ref={ref} key={product.id}>
                <ProductCardContainer product={product} />
              </div>
            ) : (
              <ProductCardContainer key={product.id} product={product} />
            );
          });
        })}
        {productPages?.pages[0].data.length === 0 && (
          <Center flexDirection="column" height="100%">
            <Image
              src={SVG_URL.NONE_PRODUCT_OTHER}
              alt="None Product"
              width="139px"
              height="76px"
            />
            <Text marginTop="34px">찾으시는 상품이 없습니다:(</Text>
          </Center>
        )}
      </Flex>
    </>
  );
};

export default Products;
