import { Image, Text } from '@chakra-ui/react';

const NoNotifications = () => {
  return (
    <>
      <Image src="/svg/noneNotification.svg" alt="None Notifacion" />
      <Text marginTop="34px">아직 받은 알람이 없어요:(</Text>
    </>
  );
};

export default NoNotifications;
