import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Center, Divider, Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';

import { userAPI } from 'apis';
import { GoBackIcon, Header, ProductCard, SEO } from 'components/common';
import { NoProducts } from 'components/User';
import { ProductsResponseType } from 'types/product';

const LIMIT = 5;

const Bid: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [biddingProducts, setBiddingProducts] = useState<ProductsResponseType>(
    []
  );
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getBiddingProducts();
  }, []);

  const getBiddingProducts = async () => {
    try {
      const { data } = await userAPI.getBiddingProducts({
        offset,
        limit: LIMIT,
      });

      setIsLoaded(true);
      setBiddingProducts([...biddingProducts, ...data]);
      setOffset(offset + LIMIT);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoaded) {
    return (
      <Center height="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <>
      {/* @ TODO 실제 사용자 닉네임으로 교체 예정 */}
      <SEO title="사용자 이름" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            lineHeight="23px"
            color="barnd.dark"
          >
            입찰한 상품
          </Text>
        }
      />
      {biddingProducts.length === 0 ? (
        <Center flexDirection="column" height="100%">
          <NoProducts pageName="userBidProducts" />
        </Center>
      ) : (
        <>
          {biddingProducts.map((product) => {
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
            marginTop="20px"
            borderRadius="30px"
            color="white"
            backgroundColor="brand.primary-900"
            _hover={{ bg: 'brand.primary-900' }}
            onClick={getBiddingProducts}
          >
            <DownloadIcon w="5" h="5" />
          </Button>
        </>
      )}
    </>
  );
};

export default Bid;
