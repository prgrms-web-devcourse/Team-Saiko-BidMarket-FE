import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Fragment, useState } from 'react';

import { categoryOptionsKOType } from 'types/categoryOption';
import categoryOption from 'utils/transform/transformCategoryOptions';

interface AddProductCategoryProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const AddProductCategory = ({ onChange }: AddProductCategoryProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { categoryOptionsKOKeys, transformCategoryOptionsKO } = categoryOption;
  const categoryOptions = categoryOptionsKOKeys.filter(
    (categoryName) => categoryName !== '전체'
  );
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (item: categoryOptionsKOType) => {
    setSelectedCategory(item);
    onClose();
    onChange(transformCategoryOptionsKO(item));
  };

  return (
    <>
      <Button
        variant="outline"
        bg="#ffffff"
        border="1px"
        w="100%"
        color="#718096"
        fontWeight="normal"
        h="50px"
        borderColor="#B6B6B6"
        gap="5px"
        onClick={onOpen}
      >
        <Flex w="100%" justifyContent="space-between">
          {selectedCategory || '카테고리 선택'}
          <ChevronDownIcon />
        </Flex>
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="20px">
          <DrawerBody padding="24px">
            {categoryOptions.map((optionName, index) => {
              return (
                <Fragment key={index}>
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => handleCategoryClick(optionName)}
                  >
                    {optionName}
                  </Text>
                  {index !== categoryOptions.length - 1 ? (
                    <Divider margin="5px 0" />
                  ) : undefined}
                </Fragment>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddProductCategory;
