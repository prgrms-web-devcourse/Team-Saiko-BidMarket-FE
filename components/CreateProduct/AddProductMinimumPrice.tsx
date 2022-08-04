import { Flex, Image, Input, Text } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

import ProductLabel from './ProductLabel';

//TODO: 100원 단위로 작성 가능, 1000원 이상 입력 가능
const AddProductMinimumPrice = () => {
  const [price, setPrice] = useState('');
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
    setPrice(target.value);
  };

  return (
    <Flex direction="column" w="100%" gap="3">
      <ProductLabel
        LabelImage={
          <Image
            src="/CreateProduct/cp1.png"
            alt="amount"
            width="25px"
            height="15px"
          />
        }
        LabelTitle={
          <Text fontSize="lg" fontWeight="semibold">
            최소 금액
          </Text>
        }
      />
      <Flex direction="column" w="100%" alignItems="flex-end">
        <Input
          type="number"
          ref={inputRef}
          onFocus={() => setVisible(false)}
          onBlur={() => setVisible(true)}
          onChange={handleInputChange}
          value={price}
          placeholder="최소 금액"
          border="1px"
          borderColor="#B6B6B6"
          max="10000000000"
          h="50px"
          min="1000"
          maxLength={13}
          step={100}
        />
        <Text fontSize="sm" color="#007C14" marginRight="3">
          {format}원
        </Text>
      </Flex>
    </Flex>
  );
};

export default AddProductMinimumPrice;
