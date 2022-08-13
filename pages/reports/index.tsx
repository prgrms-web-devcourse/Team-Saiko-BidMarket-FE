import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import {
  ProductInfo,
  UserInfo,
  ReportCondition,
  ReportTitle,
} from 'components/Report';
import useForm from 'hooks/useForm';

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
        <ReportTitle />
        <Textarea
          placeholder="신고사유를 정확하게 기재해주실수록 원활한 처리에 
        도움이 됩니다:)"
          border="1px"
          borderColor="#B6B6B6"
          h="240px"
        />
        <ReportCondition />
      </Flex>
      <Button
        position="fixed"
        bottom="0"
        w="100%"
        maxWidth="768px"
        z-index="10"
        backgroundColor="brand.primary-900"
        color="#ffffff"
        loadingText="신고 접수중"
      >
        보내기
      </Button>
    </>
  );
};

export default Reports;
