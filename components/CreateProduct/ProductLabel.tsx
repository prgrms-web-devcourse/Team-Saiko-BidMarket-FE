import { Box, Flex } from '@chakra-ui/react';

interface ProductLabelProps {
  LabelImage?: React.ReactNode;
  LabelTitle?: React.ReactNode;
}

const ProductLabel = ({ LabelImage, LabelTitle }: ProductLabelProps) => {
  return (
    <Flex alignItems="center">
      <Box w="34px">{LabelImage}</Box>

      {LabelTitle}
    </Flex>
  );
};

export default ProductLabel;
