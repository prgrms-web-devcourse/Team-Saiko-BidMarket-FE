import { Text } from '@chakra-ui/react';
import Image from 'next/image';

const NoChatting = () => {
  return (
    <>
      <Image
        src="/svg/noneChatting.svg"
        alt="None Chatting"
        width="86px"
        height="86px"
      />
      <Text marginTop="34px">아직 나눈 대화가 없어요:(</Text>
    </>
  );
};

export default NoChatting;
