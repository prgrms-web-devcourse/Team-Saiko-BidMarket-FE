import { Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

import { SVG_URL } from 'utils';

import ProductLabel from './ProductLabel';

interface AddProductTitleProps {
  inputTitle: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddProductTitle = ({ inputTitle, onChange }: AddProductTitleProps) => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Flex direction="column" w="100%" gap="3" marginTop="-3">
      <ProductLabel
        LabelImage={
          <Image src={SVG_URL.TITLE} alt="title" width="30px" height="30px" />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            상품 제목
          </Text>
        }
      />
      <Input
        ref={inputRef}
        onFocus={() => setVisible(false)}
        onBlur={() => setVisible(true)}
        name={inputTitle}
        onChange={onChange}
        placeholder="상품 제목"
        border="1px"
        borderColor="#B6B6B6"
        maxLength={20}
        h="50px"
        focusBorderColor="brand.primary-900"
      />
    </Flex>
  );
};

export default AddProductTitle;
