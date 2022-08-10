import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Center, Divider, Flex, Image, Text } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  GoBackIcon,
  Header,
  SearchInput,
  SEO,
  ProductCardContainer,
} from 'components/common';
import { BidFilterCheckBox, FilterButton } from 'components/Products';
import { useGetProductsByKeyword } from 'hooks/queries';
import { categoryOptionsENType } from 'types/categoryOption';
import { sortOptionsENType } from 'types/sortOption';
import { categoryOption, sortOption } from 'utils';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { queryDatas: query } };
};

const Products = ({
  queryDatas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { title, sort, category, progressed } = queryDatas;
  const [keyword, setKeyword] = useState<string>(String(title));
  const [selectedSortOption, setSelectedSortOption] =
    useState<sortOptionsENType>(sort as sortOptionsENType);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useState<categoryOptionsENType>(category as categoryOptionsENType);
  const [isProgressed, setIsProgressed] = useState<boolean>(
    Boolean(progressed)
  );
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

  useEffect(() => {
    // @TODO router 주소 분리 작업 (for 가독성)
    router.push(
      `/products?title=${keyword}&sort=${selectedSortOption}&category=${selectedCategoryOption}&progressed=${isProgressed}&offset=0&limit=10`
    );
  }, [selectedSortOption, selectedCategoryOption, isProgressed]);

  useEffect(() => {
    refetch();
  }, [router.asPath]);

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

  return (
    <>
      <SEO title="검색" />
      <Header leftContent={<GoBackIcon />} middleContent={<Text>검색</Text>} />
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
        {productPages?.pages.map(({ data }) => {
          return data.map((product) => {
            return <ProductCardContainer key={product.id} product={product} />;
          });
        })}
        {hasNextPage && (
          <Button
            alignSelf="center"
            w="100px"
            margin="20px 0"
            borderRadius="30px"
            color="white"
            backgroundColor="brand.primary-900"
            onClick={() => fetchNextPage()}
          >
            <DownloadIcon w="5" h="5" />
          </Button>
        )}
        {productPages?.pages[0].data.length === 0 && (
          <Center flexDirection="column" height="100%">
            <Image src="/svg/noneProductOther.svg" alt="None Product" />
            <Text marginTop="34px">찾으시는 상품이 없습니다:(</Text>
          </Center>
        )}
      </Flex>
    </>
  );
};

export default Products;
