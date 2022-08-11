import { useToast } from '@chakra-ui/react';

const Toast = (
  title: string,
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined
) => {
  const toast = useToast();

  return toast({
    position: 'top',
    title: title,
    status: status,
    duration: 1500,
    isClosable: true,
  });
};

export default Toast;
