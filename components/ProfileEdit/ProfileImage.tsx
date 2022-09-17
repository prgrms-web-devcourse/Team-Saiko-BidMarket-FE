import { Box, Circle, Text } from '@chakra-ui/react';
import Image from 'next/image';

interface ProfileImageProps {
  profileImageUrl: string;
  onClick: () => void;
}

const ProfileImage = ({ profileImageUrl, onClick }: ProfileImageProps) => (
  <Circle
    position="relative"
    flexDirection="column"
    border="2px solid"
    borderColor="brand.primary-900"
    overflow="hidden"
    cursor="pointer"
    onClick={onClick}
  >
    <Image
      width="112px"
      height="112px"
      src={profileImageUrl}
      alt="프로필이미지"
    />
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      height="32px"
      background="rgba(255, 67, 112, 0.6)"
    >
      <Text
        fontFamily="Roboto"
        fontStyle="normal"
        fontSize="15px"
        fontWeight="400"
        lineHeight="30px"
        color="white"
        textAlign="center"
      >
        변경
      </Text>
    </Box>
  </Circle>
);

export default ProfileImage;
