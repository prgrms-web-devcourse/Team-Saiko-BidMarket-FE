import { Image, Text } from '@chakra-ui/react';

const NoNotifications = () => {
  return (
    <>
      <Image src="/svg/noneNotification.svg" alt="None Notifacion" />
      <Text marginTop="34px">아직 판매하신 상품이 없어요:(</Text>
    </>
  );
};

export default NoNotifications;
