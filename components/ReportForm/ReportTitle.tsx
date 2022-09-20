import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import { SVG_URL } from 'utils';

const ReportTitle = () => {
  return (
    <Flex alignItems="center" gap="10px">
      <Image src={SVG_URL.SIREN} alt="siren-icon" width="25px" height="25px" />
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
