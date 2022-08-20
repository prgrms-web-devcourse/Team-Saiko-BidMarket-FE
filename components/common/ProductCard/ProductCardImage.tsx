import Image from 'next/image';

interface CardProductImageProps {
  alt: string;
  src: string;
}

const CardProductImage = ({ alt, src }: CardProductImageProps) => {
  return (
    <div
      style={{
        borderRadius: '5px',
        overflow: 'hidden',
        width: '114px',
        height: '114px',
      }}
    >
      <Image
        layout="fixed"
        objectFit="cover"
        width={114}
        height={114}
        loading="lazy"
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default CardProductImage;
