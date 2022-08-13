import { Button, Divider, Flex } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import { ProductInfo, UserInfo, ReportForm } from 'components/Report';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      queryDatas: query,
    },
  };
};

const Reports = ({
  queryDatas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { isProduct } = queryDatas;

  return (
    <>
      <SEO title="게시글 신고" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="게시글 신고" />}
      />
      <Flex direction="column" width="100%" gap="15px">
        {isProduct ? (
          <ProductInfo productInfo={queryDatas} />
        ) : (
          <UserInfo userInfo={queryDatas} />
        )}
        <Divider />
        <ReportForm />
      </Flex>
      {/* 신고하기 API 연동 */}
      <Button
        position="fixed"
        bottom="0"
        width="100%"
        maxWidth="768px"
        z-index="10"
        backgroundColor="brand.primary-900"
        color="white"
      >
        보내기
      </Button>
    </>
  );
};

export default Reports;
