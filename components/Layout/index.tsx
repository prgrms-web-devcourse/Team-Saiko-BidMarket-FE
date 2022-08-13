import { Flex } from '@chakra-ui/react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex bg="#eee" justifyContent="center" minHeight="100vh">
      <Flex
        position="relative"
        bg="#fff"
        flexDirection="column"
        width="768px"
        alignItems="center"
        paddingLeft="15px"
        paddingRight="15px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
