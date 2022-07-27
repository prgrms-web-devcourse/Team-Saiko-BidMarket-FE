import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import ProductLabel from './ProductLabel';

const AddProductImages = () => {
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
          icon={<AddIcon color="#FF4370" />}
        />
        <Divider orientation="vertical" w="24px" />
        {Array.from({ length: 3 }, (_, index) => index).map(() => {
          return (
            <Fragment key="index">
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
                  boxSize="82px"
                  objectFit="cover"
                  borderRadius="5px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>
              <Divider orientation="vertical" w="8px" />
            </Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AddProductImages;
