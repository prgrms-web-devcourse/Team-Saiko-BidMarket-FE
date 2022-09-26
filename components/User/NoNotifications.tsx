import { Text } from '@chakra-ui/react';
import Image from 'next/image';

import { SVG_URL } from 'utils';

const NoNotifications = () => {
  return (
    <>
      <Image
        src={SVG_URL.NONE_NOTIFICATION}
        alt="None Notifacion"
        width="108px"
        height="108px"
      />
      <Text marginTop="34px">아직 받은 알람이 없어요:(</Text>
    </>
  );
};

export default NoNotifications;
