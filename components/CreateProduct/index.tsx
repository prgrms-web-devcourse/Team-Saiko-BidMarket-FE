import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  Image,
  Select,
  Textarea,
  IconButton,
  Box,
  Divider,
  Text,
} from '@chakra-ui/react';

const CreateProduct = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingLeft="15px"
      paddingRight="15px"
      gap="16px"
    >
      <Flex marginTop="5" w="100%">
        <IconButton
          boxSize="12"
          variant="outline"
          borderColor="#E2E8F0"
          aria-label="Add Image"
          icon={<AddIcon />}
        />
        <Divider orientation="vertical" w="24px" />
        {Array.from({ length: 5 }, (_, index) => index).map(() => {
          return (
            <>
              <Box>
                <IconButton
                  position="absolute"
                  transform="translate(230%, -40%)"
                  boxSize="4"
                  variant="outline"
                  minWidth="1"
                  aria-label="Search database"
                  bg="#E2E8F0"
                  icon={<CloseIcon w="8px" h="8px" />}
                />
                <Image
                  boxSize="48px"
                  objectFit="cover"
                  borderRadius="5px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>
              <Divider orientation="vertical" w="8px" />
            </>
          );
        })}
      </Flex>
      <Input placeholder="상품 제목" marginTop="8px" />
      <Flex direction="column" w="100%" alignItems="flex-end">
        <Input placeholder="최소 금액" />
        <Text fontSize="sm" color="#007C14">
          11,000원
        </Text>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between" w="100%">
        <Select placeholder="카테고리" color="#718096" w="47%">
          <option value="option1">디지털 기기</option>
          <option value="option2">생활 가전</option>
          <option value="option3">가구 인테리어</option>
        </Select>
        <Select placeholder="희망 거래 지역" color="#718096" w="47%">
          <option value="option1">서울</option>
          <option value="option2">인천</option>
          <option value="option3">청주</option>
        </Select>
      </Flex>
      <Textarea placeholder="상품 내용 작성" h="260px" />
    </Flex>
  );
};

export default CreateProduct;
