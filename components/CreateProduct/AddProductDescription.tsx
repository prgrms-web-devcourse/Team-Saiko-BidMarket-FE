import { Flex, Image, Text, Textarea } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';

import ProductLabel from './ProductLabel';

interface AddProductTitleProps {
  inputTitle: string;
  onChange: any;
}
const AddProductDescription = ({
  inputTitle,
  onChange,
}: AddProductTitleProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image
            src="/svg/description.svg"
            alt="contents"
            width="20px"
            height="21px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            상세 내용
          </Text>
        }
      />
      <Textarea
        name={inputTitle}
        onFocus={() => setVisible(false)}
        onBlur={() => setVisible(true)}
        placeholder="상품 내용 작성"
        border="1px"
        onChange={onChange}
        borderColor="#B6B6B6"
        h="240px"
        maxLength={300}
      />
    </Flex>
  );
};

export default AddProductDescription;
