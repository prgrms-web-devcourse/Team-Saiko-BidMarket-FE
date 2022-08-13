import { Button, Divider, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import { ProductInfo, UserInfo, ReportForm } from 'components/Report';

const Reports: NextPage = () => {
  return (
    <>
      <SEO title="게시글 신고" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="게시글 신고" />}
      />
      <Flex direction="column" width="100%" gap="15px">
        <ProductInfo />
        <Divider />
        <UserInfo />
        <Divider />
        <ReportForm />
      </Flex>
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
