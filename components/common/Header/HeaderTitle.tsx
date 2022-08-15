import { Heading } from '@chakra-ui/react';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  return (
    <Heading as="h4" size="md">
      {title}
    </Heading>
  );
};

export default HeaderTitle;
