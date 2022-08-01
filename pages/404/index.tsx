import { Flex, Image, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="5px"
      height="100%"
    >
      <Image src="/svg/404.svg" alt="404-image" />
      <Text fontSize="xl" fontWeight="bold" color="brand.primary-900">
        페이지를 찾을 수 없습니다.
      </Text>
      <Text color="#8E8E8E">
        페이지가 삭제되었거나 주소가 변경되었을 수 있습니다
      </Text>
      <Button
        marginTop="20px"
        padding="10px 30px"
        borderRadius="30px"
        color="white"
        backgroundColor="brand.primary-900"
        onClick={() => router.push(`/`)}
      >
        메인 페이지로 돌아가기
      </Button>
    </Flex>
  );
};

export default NotFound;
