import { Circle, Avatar, Box, Text } from '@chakra-ui/react';

const ProfileImage = () => (
  <Circle
    position="relative"
    flexDirection="column"
    border="2px solid #FF4370"
    overflow="hidden"
    cursor="pointer"
  >
    <Avatar
      name="Christian Nwamba"
      size="2xl"
      src="https://bit.ly/code-beast"
    />
    <Box
      position="absolute"
      bottom="0"
      width="100%"
      height="32px"
      background="rgba(255, 67, 112, 0.6)"
      opacity="0.6"
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
