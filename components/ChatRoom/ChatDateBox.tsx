import { Center, Text } from '@chakra-ui/react';

interface ChatDateBoxProps {
  chatDate: string;
}

const ChatDateBox = ({ chatDate }: ChatDateBoxProps) => {
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
        {chatDate}
      </Text>
    </Center>
  );
};

export default ChatDateBox;
