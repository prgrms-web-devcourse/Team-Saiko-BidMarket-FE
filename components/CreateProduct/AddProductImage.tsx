import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';

import ProductLabel from './ProductLabel';

interface AddProductImageProps {
  productImageUrls: string[];
  onClick: () => void;
  onRemove: (index: string) => void;
}

const AddProductImage = ({
  productImageUrls,
  onClick,
  onRemove,
}: AddProductImageProps) => {
  return (
    <Flex direction="column" w="100%" gap="1">
      <ProductLabel
        LabelImage={<Image src="/svg/image.svg" alt="picture" width="22px" />}
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            사진
          </Text>
        }
      />
      <Text fontSize="sm" marginTop="1">
        다양한 사진이 많을수록 입찰받을 확률이 높아져요!
      </Text>
      <Flex marginTop="3" w="100%" h="100%">
        <IconButton
          boxSize="82px"
          variant="outline"
          borderColor="#FF4370"
          aria-label="Add Image"
          onClick={onClick}
          icon={<AddIcon color="#FF4370" />}
          minW="82px"
        />
        <Divider orientation="vertical" w="24px" />
        <Flex w="70%" overflowX="hidden">
          <Flex
            w="100%"
            position="relative"
            overflowX="scroll"
            whiteSpace="nowrap"
            css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {productImageUrls &&
              productImageUrls?.map((ImageURL) => {
                return (
                  <Box key={ImageURL} minW="82px" marginRight="15px">
                    <IconButton
                      position="absolute"
                      transform="translate(300%, -25%)"
                      borderRadius="2xl"
                      boxSize="22px"
                      variant="outline"
                      minWidth="1"
                      aria-label="Delete Button"
                      bg="#FF4370"
                      icon={<CloseIcon w="8px" h="8px" color="#FFFFFF" />}
                      onClick={() => onRemove(ImageURL)}
                    />
                    <Image
                      alt="image"
                      w="82px"
                      h="82px"
                      borderRadius="5px"
                      marginRight="15px"
                      src={ImageURL}
                    />
                  </Box>
                );
              })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AddProductImage;
