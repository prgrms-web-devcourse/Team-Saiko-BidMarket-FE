import { Center, Flex } from '@chakra-ui/react';

interface HeaderProps {
  leftContent?: React.ReactNode;
  middleContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const Header = ({ leftContent, middleContent, rightContent }: HeaderProps) => {
  return (
    <Flex padding="10px" justifyContent="space-between" width="100%">
      <Flex alignItems="center" flex="1">
        {leftContent}
      </Flex>
      <Center alignItems="center" flex="1">
        {middleContent}
      </Center>
      <Flex justifyContent="flex-end" alignItems="center" flex="1">
        {rightContent}
      </Flex>
    </Flex>
  );
};

export default Header;
