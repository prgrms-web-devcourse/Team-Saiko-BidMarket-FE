import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react';

import ProductLabel from './ProductLabel';

interface AddProductImageProps {
  productImageUrl: string;
  productImageArray: string[];
  onClick: () => void;
}
//TODO: 이미지 추가/삭제 기능 추가 예정
const AddProductImage = ({
  productImageUrl,
  productImageArray,
  onClick,
}: AddProductImageProps) => {
  return (
    <Flex direction="column" w="100%" gap="1">
      <ProductLabel
        LabelImage={
          <Image src="/CreateProduct/cp4.png" alt="picture" width="22px" />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            사진
          </Text>
        }
      />
      <Text fontSize="sm" marginTop="1">
        다양한 사진이 많을수록 입찰받을 확률이 높아져요!
      </Text>
      <Flex marginTop="3" w="100%">
        <IconButton
          boxSize="82px"
          variant="outline"
          borderColor="#FF4370"
          aria-label="Add Image"
          onClick={onClick}
          icon={<AddIcon color="#FF4370" />}
        />
        <Divider orientation="vertical" w="24px" />
        {productImageArray.map((ImageURL) => {
          return (
            <>
              <Box>
                <IconButton
                  position="absolute"
                  transform="translate(300%, -40%)"
                  borderRadius="2xl"
                  boxSize="22px"
                  variant="outline"
                  minWidth="1"
                  aria-label="Delete Button"
                  bg="#FF4370"
                  icon={<CloseIcon w="8px" h="8px" color="#FFFFFF" />}
                />
                <Image
                  key={ImageURL}
                  alt="image"
                  w="82px"
                  h="82px"
                  borderRadius="5px"
                  marginRight="15px"
                  src={ImageURL}
                />
              </Box>
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AddProductImage;
