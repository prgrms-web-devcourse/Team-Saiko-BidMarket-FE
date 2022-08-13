import { Divider, Flex, Image, Text, Textarea } from '@chakra-ui/react';

interface ProductReportProps {
  image: string;
  title: string;
  description: string;
  createdAt: Date;
}

const ProductReport = ({
  image,
  title,
  description,
  createdAt,
}: ProductReportProps) => {
  return (
    <Flex direction="column" width="100%" gap="10px">
      <Flex gap="15px">
        <Image w="90px" h="90px" src={image} borderRadius="7px" />
        <Flex direction="column">
          <Text>춘식이가 먹다 남긴 귤</Text>
          <Text fontSize="sm" color="brand.dark-light">
            라이언이 키우는 춘식이! 고구마를 제일 좋아아아아아아아아아ㅏㅇ...
          </Text>
          <Flex marginTop="5px" gap="10px">
            <Text fontSize="sm" color="brand.dark-light">
              워터
            </Text>
            <Divider orientation="vertical" />
            <Text fontSize="sm" color="brand.dark-light">
              10월 27일
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Textarea
        placeholder="신고사유를 정확하게 기재해주실수록 원활한 처리에 
        도움이 됩니다:)"
        border="1px"
        borderColor="#B6B6B6"
        h="240px"
      />
    </Flex>
  );
};

export default ProductReport;
