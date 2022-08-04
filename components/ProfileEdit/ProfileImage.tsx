import { Avatar, Box, Circle, Text } from '@chakra-ui/react';

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
    <Avatar name="profile-image" size="2xl" src={profileImageUrl} />
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
