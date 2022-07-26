import { Button, Text } from '@chakra-ui/react';

const SubmitButton = () => (
  <Button
    flexShrink="0"
    justifySelf="flex-end"
    type="submit"
    width="100%"
    height="57px"
    backgroundColor="#FF4370"
    cursor="pointer"
  >
    <Text
      fontFamily="Roboto"
      fontStyle="normal"
      fontSize="17px"
      fontWeight="400px"
      lineHeight="20px"
      color="white"
    >
      완료
    </Text>
  </Button>
);

export default SubmitButton;
