import { Image } from '@chakra-ui/react';

import { Image as ImageType } from 'types/product';

interface ProductImageProps {
  images: ImageType[];
}

const ProductImage = ({ images }: ProductImageProps) => {
  return (
    <Image
      width="100%"
      height="317px"
      objectFit="cover"
      alt="product-image"
      src={images[0].url}
    />
  );
};

export default ProductImage;
