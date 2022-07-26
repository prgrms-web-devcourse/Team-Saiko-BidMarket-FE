import { Image } from '@chakra-ui/react';

type CardImageProps = {
  alt: string;
  src: string;
};

const CardImage = ({ alt, src }: CardImageProps) => {
  return (
    <Image
      boxSize="114px"
      objectFit="cover"
      borderRadius="5"
      alt={alt}
      src={src}
    />
  );
};

export default CardImage;
