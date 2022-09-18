import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, IconButton, Progress } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';

import { Image as ImageType } from 'types/product';

interface ProductImageProps {
  images: ImageType[];
}

const ProductImage = ({ images }: ProductImageProps) => {
  const [showImage, setShowImage] = useState(1);

  if (images.length === 1) {
    const { order, url } = images[0];
    return (
      <Box
        key={order}
        display={order === showImage ? 'visible' : 'none'}
        width="100%"
        height="317px"
      >
        <Image
          layout="fill"
          objectFit="cover"
          alt="product-image"
          src={url ?? '/svg/basket.svg'}
        />
      </Box>
    );
  }

  return (
    <>
      {/* @TODO 슬라이드 개선할 예정 + 모바일에서는 화살표 안보이게 */}
      {/* @TODO 모바일에서 좌우화살표 클릭해도 커진 상태 유지되는 현상 개선 필요 (위의 TODO와 함께 개선 예정) */}
      {/* 만약 최종 제출 영상을 위해 제거하고 싶은 경우 제거 가능 */}
      {/* @TODO 화살표 버튼 레퍼런스 더 찾아보기 */}
      <IconButton
        position="absolute"
        top="150px"
        left="15px"
        variant="ghost"
        isRound
        zIndex={2}
        _active={{ bg: 'brand.primary-100' }}
        _hover={{ bg: 'none' }}
        disabled={showImage === 1}
        aria-label="Prev Product Image"
        icon={
          <ChevronLeftIcon
            w={5}
            h={5}
            _hover={{ transform: 'scale(2)' }}
            transition="all ease 0.2s 0s"
            color="#dddddd"
          />
        }
        onClick={() => setShowImage(showImage - 1)}
      />
      <Box position="relative" w="100%" h="317px">
        {images.map(({ order, url }) => {
          return (
            <Box
              key={order}
              position="absolute"
              zIndex={1}
              opacity={order === showImage ? '1' : '0'}
              width="100%"
              height="317px"
              transition="all ease 0.3s 0s"
            >
              <Image
                layout="fill"
                objectFit="cover"
                alt="product-image"
                src={url}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          '#progress > div': {
            bg: 'brand.primary-900',
            transition: 'all ease 0.3s 0s',
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
        zIndex={2}
        top="150px"
        right="15px"
        variant="ghost"
        isRound
        _active={{ bg: 'brand.primary-100' }}
        _hover={{ bg: 'none' }}
        disabled={showImage === images.length}
        aria-label="Next Product Image"
        icon={
          //TODO #dddddd 색 브랜드 색으로 변경 예정
          <ChevronRightIcon
            w={5}
            h={5}
            _hover={{ transform: 'scale(2)' }}
            transition="all ease 0.2s 0s"
            color="#dddddd"
          />
        }
        onClick={() => setShowImage(showImage + 1)}
      />
    </>
  );
};

export default ProductImage;
