import { Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import ProductLabel from './ProductLabel';
interface AddProductMinimumPriceProps {
  inputMinimumPrice: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//TODO: 100원 단위로 작성 가능, 1000원 이상 입력 가능
const AddProductMinimumPrice = ({
  inputMinimumPrice,
  onChange,
}: AddProductMinimumPriceProps) => {
  const [format, setFormat] = useState('0');
  const [visible, setVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    const numeralReg = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
    const numericValueOnly = target.value.replaceAll(',', '');

    if (target.value.length > target.maxLength) {
      target.value = target.value.slice(0, target.maxLength);
    }

    setFormat(numericValueOnly.replace(numeralReg, ','));
  };

  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image src="/svg/price.svg" alt="amount" width="25px" height="15px" />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            최소 금액
          </Text>
        }
      />
      <Flex direction="column" w="100%" alignItems="flex-end">
        <Input
          ref={inputRef}
          name={inputMinimumPrice}
          type="number"
          onFocus={() => setVisible(false)}
          onBlur={() => setVisible(true)}
          onChange={onChange}
          onInput={handleInputChange}
          placeholder="최소 금액"
          border="1px"
          borderColor="#B6B6B6"
          max="10000000000"
          h="50px"
          maxLength={13}
          focusBorderColor="brand.primary-900"
        />
        <Text fontSize="sm" color="#007C14" marginRight="3">
          {format}원
        </Text>
      </Flex>
    </Flex>
  );
};

export default AddProductMinimumPrice;
