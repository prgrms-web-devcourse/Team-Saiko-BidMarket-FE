import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const searchInput = () => {
  return (
    <InputGroup marginTop="15px">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="#FF4370" />}
      />
      <Input
        type="text"
        placeholder="찾으시는 상품을 검색해보세요!"
        focusBorderColor="#FF4370"
        borderColor="#FF4370"
        borderRadius="50px"
      />
    </InputGroup>
  );
};

export default searchInput;