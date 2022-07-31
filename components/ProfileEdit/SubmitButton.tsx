import { Button, Text } from '@chakra-ui/react';

interface SubmitButtonProps {
  isLoading: boolean;
  loadingText: string;
}

const SubmitButton = ({ isLoading, loadingText }: SubmitButtonProps) => (
  <Button
    isLoading={isLoading}
    loadingText={loadingText}
    position="fixed"
    bottom="0"
    maxWidth="768px"
    type="submit"
    width="100%"
    height="57px"
    backgroundColor="brand.primary-900"
    cursor="pointer"
    _hover={{ bg: 'brand.primary-900' }}
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
