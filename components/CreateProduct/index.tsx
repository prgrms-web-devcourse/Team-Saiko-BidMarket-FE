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
import { Fragment } from 'react';

const CreateProduct = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingLeft="15px"
      paddingRight="15px"
      gap="20px"
      marginTop="20px"
    >
      <Flex direction="column">
        <Flex alignItems="center">
          <Box w="33px">
            <Image src="/CreateProduct/cp4.png" alt="picture" width="22px" />
          </Box>
          <Text fontSize="lg" fontWeight="semibold">
            사진
          </Text>
        </Flex>
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

      <Flex direction="column" w="100%" gap="3">
        <Flex alignItems="center">
          <Box w="33px" position="absolute" transform="translate(-10%, 0)">
            <Image
              src="/CreateProduct/cp2.png"
              alt="title"
              width="30px"
              height="30px"
            />
          </Box>
          <Text fontSize="lg" fontWeight="semibold" marginLeft="9%">
            상품 제목
          </Text>
        </Flex>
        <Input placeholder="상품 제목" />
      </Flex>

      <Flex direction="column" w="100%" gap="3">
        <Flex alignItems="center">
          <Box w="33px">
            <Image
              src="/CreateProduct/cp1.png"
              alt="amount"
              width="25px"
              height="15px"
            />
          </Box>
          <Text fontSize="lg" fontWeight="semibold">
            최소 금액
          </Text>
        </Flex>
        <Flex direction="column" w="100%" alignItems="flex-end">
          <Input placeholder="최소 금액" />
          <Text fontSize="sm" color="#007C14" marginRight="3">
            11,000원
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" w="100%" gap="3">
        <Flex alignItems="center">
          <Box w="33px">
            <Image
              src="/CreateProduct/cp5.png"
              alt="select"
              width="21px"
              height="22px"
            />
          </Box>

          <Text fontSize="lg" fontWeight="semibold">
            판매 설정
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
      </Flex>

      <Flex direction="column" w="100%" gap="3">
        <Flex alignItems="center">
          <Box w="33px">
            <Image
              src="/CreateProduct/cp3.png"
              alt="contents"
              width="20px"
              height="21px"
            />
          </Box>
          <Text fontSize="lg" fontWeight="semibold">
            상세 내용
          </Text>
        </Flex>
        <Textarea placeholder="상품 내용 작성" h="260px" />
      </Flex>
    </Flex>
  );
};

export default CreateProduct;
