import { Input } from '@chakra-ui/react';

const AddProductLocation = () => {
  return (
    <Input
      placeholder="희망 거래 지역"
      border="1px"
      borderColor="#B6B6B6"
      w="47%"
      h="50px"
      maxLength={20}
    />
  );
};

export default AddProductLocation;
