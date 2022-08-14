import { Center, Text } from '@chakra-ui/react';

// TODO: 메세지 날짜별로 구분하고 날짜를 prop으로 받기
const ChatDateBox = () => {
  return (
    <Center
      bgColor="brand.primary-100"
      borderRadius="30px"
      width="107px"
      height="25px"
    >
      <Text
        color="#FF7898"
        fontFamily="Roboto"
        fontStyle="normal"
        fontWeight="400"
        fontSize="13px"
        lineHeight="15px"
      >
        2022년 8월 14일
      </Text>
    </Center>
  );
};

export default ChatDateBox;
