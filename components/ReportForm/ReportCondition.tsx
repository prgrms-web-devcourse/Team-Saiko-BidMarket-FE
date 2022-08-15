import { Flex, Text } from '@chakra-ui/react';

const ReportCondition = () => {
  return (
    <Flex direction="column" gap="10px">
      <Text fontSize="sm" color="brand.dark-light">
        · 허위 신고시 서비스 이용에 제한을 받으실 수 있습니다.
      </Text>
      <Text fontSize="sm" color="brand.dark-light">
        · 신고 내용에 대한 답변은 따로 회신되지 않습니다.
      </Text>
      <Text fontSize="sm" color="brand.dark-light">
        · 중복 신고는 불가능합니다.
      </Text>
    </Flex>
  );
};

export default ReportCondition;
