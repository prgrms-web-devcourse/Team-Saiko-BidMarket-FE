import { Select } from '@chakra-ui/react';

const AddProductCategory = () => {
  return (
    <Select placeholder="카테고리" color="#718096" w="47%">
      <option value="option1">디지털 기기</option>
      <option value="option2">생활 가전</option>
      <option value="option3">가구 인테리어</option>
    </Select>
  );
};

export default AddProductCategory;
