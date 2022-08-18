import Image from 'next/image';

interface CardProductImageProps {
  alt: string;
  src: string;
}

const CardProductImage = ({ alt, src }: CardProductImageProps) => {
  return (
    <Image
      layout="fixed"
      width="114px"
      height="114px"
      loading="lazy"
      alt={alt}
      src={src}
    />
  );
};

export default CardProductImage;
