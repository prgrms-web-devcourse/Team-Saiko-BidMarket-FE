import Card from '@common/Card';
import Banner from './Banner';
import SearchInput from './SearchInput';
import ProductAddButton from './ProductAddButton';
import { Divider, Flex } from '@chakra-ui/react';

const Main = () => {
  //TODO: Header 컴포넌트 추가
  return (
    <Flex
      position="relative"
      direction="column"
      width="100%"
      paddingLeft="15px"
      paddingRight="15px"
    >
      <Banner />
      <Divider marginTop="15px" />
      <SearchInput />
      {Array.from({ length: 10 }, (_, index) => index).map(() => {
        return (
          <>
            <Card />
            <Divider />
          </>
        );
      })}
      <ProductAddButton />
    </Flex>
  );
};

export default Main;
