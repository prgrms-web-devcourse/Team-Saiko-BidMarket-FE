import { AddIcon } from '@chakra-ui/icons';
import { Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react';

import ProductLabel from './ProductLabel';

interface AddProductImageProps {
  productImageUrl: string;
  onClick: () => void;
}
//TODO: 이미지 추가/삭제 기능 추가 예정
const AddProductImage = ({
  productImageUrl,
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
        <Image alt="image" width="82px" src={productImageUrl} />
      </Flex>
    </Flex>
  );
};

export default AddProductImage;
