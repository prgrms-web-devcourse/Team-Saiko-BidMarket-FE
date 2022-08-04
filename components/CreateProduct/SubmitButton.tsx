import { Button, Text } from '@chakra-ui/react';

interface SubmitButtonProps {
  isLoading: boolean;
  loadingText: string;
}

const SubmitButton = ({ isLoading, loadingText }: SubmitButtonProps) => (
  <Button
    isLoading={isLoading}
    loadingText={loadingText}
    maxWidth="55px"
    type="submit"
    width="100%"
    height="29px"
    backgroundColor="#FF4370"
    cursor="pointer"
    _hover={{ bg: '#FFDEE6' }}
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
