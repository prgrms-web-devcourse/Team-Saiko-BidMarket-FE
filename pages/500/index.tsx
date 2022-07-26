import { Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SVG_URL } from 'utils';

const ERROR = () => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="5px"
      height="100%"
    >
      <Image
        src={SVG_URL.SERVER_ERROR}
        alt="500-image"
        width="205px"
        height="198px"
      />
      <Text fontSize="xl" fontWeight="bold" color="brand.primary-900">
        서비스에 접속할 수 없습니다.
      </Text>
      <Text color="brand.dark-light">
        기술적인 문제로 일시적으로 접속되지 않았습니다.
      </Text>
      <Text color="brand.dark-light">
        잠시 후 다시 이용 부탁드리며 이용에 불편을 드려 사과드립니다.
      </Text>
      <Button
        marginTop="20px"
        padding="10px 30px"
        borderRadius="30px"
        color="white"
        backgroundColor="brand.primary-900"
        onClick={() => router.back()}
      >
        이전 페이지로 돌아가기
      </Button>
      <Link href={'/'} passHref>
        <Button
          marginTop="5px"
          padding="10px 30px"
          border="1px"
          borderRadius="30px"
          color="brand.primary-900"
          backgroundColor="white"
        >
          메인 페이지로 돌아가기
        </Button>
      </Link>
    </Flex>
  );
};

export default ERROR;
