import { Flex, Image, Text, Textarea } from '@chakra-ui/react';

const ReportForm = () => {
  return (
    <>
      <Flex alignItems="center" gap="10px">
        <Image src="/svg/siren.svg" alt="siren-icon" />
        <Text>
          신고사유 입력
          <Text as="span" color="brand.primary-900">
            (필수)
          </Text>
        </Text>
      </Flex>
      <Textarea
        placeholder="신고사유를 정확하게 기재해주실수록 원활한 처리에 
        도움이 됩니다:)"
        border="1px"
        borderColor="#B6B6B6"
        h="240px"
      />
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
    </>
  );
};

export default ReportForm;
