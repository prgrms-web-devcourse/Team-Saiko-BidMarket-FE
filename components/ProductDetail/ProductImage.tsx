import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton, Image, Progress } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Image as ImageType } from 'types/product';

interface ProductImageProps {
  images: ImageType[];
}

const ProductImage = ({ images }: ProductImageProps) => {
  const [showImage, setShowImage] = useState(1);

  return (
    <>
      {/* @TODO 슬라이드 개선할 예정 + 모바일에서는 화살표 안보이게 */}
      {/* @TODO 화살표 버튼 레퍼런스 더 찾아보기 */}
      <IconButton
        position="absolute"
        top="150px"
        left="15px"
        variant="ghost"
        isRound
        _active={{ bg: 'brand.primary-100' }}
        _hover={{ bg: 'none' }}
        disabled={showImage === 1}
        aria-label="Prev Product Image"
        icon={<ChevronLeftIcon w={5} h={5} />}
        onClick={() => setShowImage(showImage - 1)}
      />
      {images.map(({ order, url }) => {
        return (
          <Image
            key={order}
            display={order === showImage ? 'visible' : 'none'}
            width="100%"
            height="317px"
            objectFit="contain"
            alt="product-image"
            src={url ?? '/svg/basket.svg'}
          />
        );
      })}
      <Box
        sx={{
          '#progress > div': {
            bg: 'brand.primary-900',
          },
        }}
      >
        <Progress
          id="progress"
          value={(showImage / images.length) * 100}
          size="xs"
        />
      </Box>
      <IconButton
        position="absolute"
        top="150px"
        right="15px"
        variant="ghost"
        isRound
        _active={{ bg: 'brand.primary-100' }}
        _hover={{ bg: 'none' }}
        disabled={showImage === images.length}
        aria-label="Next Product Image"
        icon={<ChevronRightIcon w={5} h={5} />}
        onClick={() => setShowImage(showImage + 1)}
      />
    </>
  );
};

export default ProductImage;
