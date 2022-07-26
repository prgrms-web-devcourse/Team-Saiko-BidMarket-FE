import { Flex } from '@chakra-ui/react';

type LayoutProps = {
  children?: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
  return (
    <Flex bg="#eee" justifyContent="center" minHeight="100vh">
      <Flex bg="#fff" flexDirection="column" width="768px" alignItems="center">
        {children}
      </Flex>
    </Flex>
  );
};

export default layout;
