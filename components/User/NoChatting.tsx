import { Image, Text } from '@chakra-ui/react';

const NoChatting = () => {
  return (
    <>
      <Image src="/svg/noneChatting.svg" alt="None Chatting" />
      <Text marginTop="34px">아직 나눈 대화가 없어요:(</Text>
    </>
  );
};

export default NoChatting;
