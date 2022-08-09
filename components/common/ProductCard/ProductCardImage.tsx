import { Image } from '@chakra-ui/react';

interface CardProductImageProps {
  alt: string;
  src: string;
}

const CardProductImage = ({ alt, src }: CardProductImageProps) => {
  return (
    <Image w="114px" objectFit="cover" borderRadius="5" alt={alt} src={src} />
  );
};

export default CardProductImage;
