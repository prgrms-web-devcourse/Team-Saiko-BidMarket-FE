import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center height="100%">
      <Spinner
        thickness="4px"
        color="brand.primary-900"
        emptyColor="gray.200"
        size="xl"
      />
    </Center>
  );
};

export default Loading;
