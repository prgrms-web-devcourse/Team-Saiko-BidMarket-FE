import { Box, Image } from '@chakra-ui/react';

interface NotificationProps {
  title: string;
  description: string;
  iconImage: string;
  productImage: string;
  createdAt: Date;
}

const Notification = ({
  title,
  description,
  iconImage,
  productImage,
  createdAt,
}: NotificationProps) => {
  return (
    <Box>
      <Image src={iconImage} alt="icon-image" />
    </Box>
  );
};

export default Notification;
