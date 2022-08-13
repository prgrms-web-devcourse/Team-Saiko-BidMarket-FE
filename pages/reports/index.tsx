import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';

import { reportAPI } from 'apis';
import { Header, GoBackIcon, SEO, HeaderTitle } from 'components/common';
import {
  ProductInfo,
  UserInfo,
  ReportCondition,
  ReportTitle,
} from 'components/Report';
import useForm from 'hooks/useForm';
import reportsValidation from 'utils/validation/reportsValidation';

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
  const { productId, userId } = queryDatas;
  const [reportContent, setReportContent] = useState('');
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { reportContent },
    onSubmit: async ({ reportContent }) => {
      await createReport(reportContent);
      setReportContent(reportContent);
    },
    validate: reportsValidation,
  });

  const createReport = async (reason: string) => {
    if (productId) {
      await reportAPI.createReportByProduct(productId, reason);
      return;
    }

    await reportAPI.createReportByUser(userId, reason);
  };

  return (
    <>
      <SEO title="게시글 신고" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={<HeaderTitle title="게시글 신고" />}
      />
      <form style={{ width: '100%', height: '100%' }} onSubmit={handleSubmit}>
        <Flex direction="column" width="100%" gap="15px">
          {productId ? (
            <ProductInfo productInfo={queryDatas} />
          ) : (
            <UserInfo userInfo={queryDatas} />
          )}
          <Divider />
          <ReportTitle />
          <FormControl
            isInvalid={(errors.reportContent as string) ? true : false}
          >
            <Textarea
              name="reportContent"
              onChange={handleChange}
              placeholder="신고사유를 정확하게 기재해주실수록 원활한 처리에 도움이 됩니다:)"
              border="1px"
              borderColor="#B6B6B6"
              h="240px"
            />
            <FormErrorMessage>
              {errors.reportContent as string}
            </FormErrorMessage>
          </FormControl>
          <ReportCondition />
        </Flex>
        <Button
          position="fixed"
          bottom="0"
          right="0"
          left="0"
          w="100%"
          margin="0 auto"
          padding="0 15px"
          maxWidth="768px"
          color="#ffffff"
          isLoading={isLoading}
          loadingText="신고 접수중"
          backgroundColor="brand.primary-900"
          type="submit"
        >
          보내기
        </Button>
      </form>
    </>
  );
};

export default Reports;
