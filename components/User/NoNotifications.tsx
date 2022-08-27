import { Text } from '@chakra-ui/react';
import Image from 'next/image';

const NoNotifications = () => {
  return (
    <>
      <Image
        src="/svg/noneNotification.svg"
        alt="None Notifacion"
        width="108px"
        height="108px"
      />
      <Text marginTop="34px">아직 받은 알람이 없어요:(</Text>
    </>
  );
};

export default NoNotifications;
