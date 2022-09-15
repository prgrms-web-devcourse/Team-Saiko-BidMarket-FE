import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface CardProductImageProps {
  alt: string;
  src: string;
}

const CardProductImage = ({ alt, src }: CardProductImageProps) => {
  return (
    <Box borderRadius={'5px'} overflow="hidden" w="114px" h="114px">
      <Image
        layout="fixed"
        objectFit="cover"
        width={114}
        height={114}
        alt={alt}
        src={src}
      />
    </Box>
  );
};

export default CardProductImage;
