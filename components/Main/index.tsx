import { Divider, Flex } from '@chakra-ui/react';
import { Fragment } from 'react';

import Card from '@common/Card';
import SearchInput from '@common/SearchInput';

import Banner from './Banner';
import Header from './MainHeader';
import ProductAddButton from './ProductAddButton';

const Main = () => {
  return (
    <>
      <Header />
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
        {Array(10)
          .fill(1)
          .map((_, index) => {
            return (
              <Fragment key={index}>
                <Card />
                <Divider />
              </Fragment>
            );
          })}
        <ProductAddButton />
      </Flex>
    </>
  );
};

export default Main;
