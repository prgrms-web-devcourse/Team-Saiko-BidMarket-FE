import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <InputGroup marginTop="15px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="brand.primary-900" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="찾으시는 상품을 검색해보세요!"
        focusBorderColor="brand.primary-900"
        borderColor="brand.primary-900"
        borderRadius="50px"
      />
    </InputGroup>
  );
};

export default SearchInput;
