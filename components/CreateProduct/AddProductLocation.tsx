import { Select } from '@chakra-ui/react';

const AddProductLocation = () => {
  return (
    <Select placeholder="희망 거래 지역" color="#718096" w="47%">
      <option value="option1">서울</option>
      <option value="option2">인천</option>
      <option value="option3">청주</option>
    </Select>
  );
};

export default AddProductLocation;
