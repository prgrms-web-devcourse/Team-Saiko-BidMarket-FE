import { Text } from '@chakra-ui/react';
import Image from 'next/image';

import { SVG_URL } from 'utils';

const NoChatting = () => {
  return (
    <>
      <Image
        src={SVG_URL.NONE_CHATTING}
        alt="None Chatting"
        width="86px"
        height="86px"
      />
      <Text marginTop="34px">아직 나눈 대화가 없어요:(</Text>
    </>
  );
};

export default NoChatting;
