import { ChevronLeftIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Center, Flex, Text } from '@chakra-ui/react';

const Header = ({
  left,
  middle,
  right,
}: {
  left?: string;
  middle?: string;
  right?: string;
}) => {
  return (
    <Flex padding="10px" justifyContent="space-between" width="100%">
      <Flex alignItems="center" flex="1">
        <ChevronLeftIcon boxSize="8" />
      </Flex>
      <Center alignItems="center" flex="1">
        <Text>bidmarket</Text>
      </Center>
      <Flex justifyContent="flex-end" alignItems="center" flex="1">
        <HamburgerIcon boxSize="6" />
      </Flex>
    </Flex>
  );
};

export default Header;
