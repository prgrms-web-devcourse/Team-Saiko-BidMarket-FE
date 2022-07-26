import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
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
} from 'components/ReportForm';
import useForm from 'hooks/useForm';
import { setToastInfo } from 'utils';
import reportsValidation from 'utils/validation/reportsValidation';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      queryDatas: query,
    },
  };
};

const PRODUCT = 'PRODUCT';
const USER = 'USER';

const Reports = ({
  queryDatas,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const toast = useToast();
  const { productId, userId } = queryDatas;
  const [reason, setReason] = useState('');
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { reason },
    onSubmit: async ({ reason }) => {
      await createReportByStatus(reason);
      setReason(reason);
    },
    validate: reportsValidation,
  });

  const createReportByStatus = async (reason: string) => {
    try {
      if (productId) {
        await reportAPI.createReport(PRODUCT, parseInt(productId, 10), reason);
      } else {
        await reportAPI.createReport(USER, parseInt(userId, 10), reason);
      }
      toast(setToastInfo('top', '신고가 접수되었습니다.', 'success'));
    } catch (error) {
      toast(
        setToastInfo(
          'top',
          '신고가 접수되지 않았습니다. 이미 신고했던 사용자인지 확인해주세요!',
          'error'
        )
      );
      console.log(error);
    }
  };

  return (
    <>
      <SEO title="신고하기" />
      <Header
        leftContent={<GoBackIcon />}
        middleContent={
          <HeaderTitle title={productId ? '게시글 신고' : '사용자 신고'} />
        }
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
          <FormControl isInvalid={(errors.reason as string) ? true : false}>
            <Textarea
              name="reason"
              onChange={handleChange}
              placeholder="신고사유를 정확하게 기재해주실수록 원활한 처리에 도움이 됩니다:)"
              border="1px"
              borderColor="#B6B6B6"
              h="240px"
            />
            <FormErrorMessage>{errors.reason as string}</FormErrorMessage>
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
          borderRadius="0"
        >
          보내기
        </Button>
      </form>
    </>
  );
};

export default Reports;
