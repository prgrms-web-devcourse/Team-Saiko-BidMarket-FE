import { Center, Flex } from '@chakra-ui/react';

interface HeaderProp {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
}

const Header = ({ left, middle, right }: HeaderProp) => {
  return (
    <Flex padding="10px" justifyContent="space-between" width="100%">
      <Flex alignItems="center" flex="1">
        {left}
      </Flex>
      <Center alignItems="center" flex="1">
        {middle}
      </Center>
      <Flex justifyContent="flex-end" alignItems="center" flex="1">
        {right}
      </Flex>
    </Flex>
  );
};

export default Header;
