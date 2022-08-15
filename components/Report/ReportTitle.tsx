import { Flex, Text, Image } from '@chakra-ui/react';

const ReportTitle = () => {
  return (
    <Flex alignItems="center" gap="10px">
      <Image src="/svg/siren.svg" alt="siren-icon" />
      <Text>
        신고사유 입력
        <Text as="span" color="brand.primary-900">
          (필수)
        </Text>
      </Text>
    </Flex>
  );
};

export default ReportTitle;
