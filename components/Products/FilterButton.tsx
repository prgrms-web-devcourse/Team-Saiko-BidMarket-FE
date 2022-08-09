import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { Fragment, useState } from 'react';

import {
  sortOptionsENType,
  categoryOptionsENType,
  categoryOptionsKOType,
  sortOptionsKOType,
} from 'types/products';
import { categoryOption, sortOption } from 'utils';

interface FilterButtonProps {
  filterName: 'sortFilter' | 'categoryFilter';
  selectedOption: sortOptionsENType | categoryOptionsENType;
  onFilterChange: (value: sortOptionsENType | categoryOptionsENType) => void;
}

const { sortOptionsKOKeys, transformSortOptionsKO, transformSortOptionsEN } =
  sortOption;

const {
  categoryOptionsKOKeys,
  transformCategoryOptionsKO,
  transformCategoryOptionsEN,
} = categoryOption;

const FilterButton = ({
  filterName,
  selectedOption,
  onFilterChange,
}: FilterButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OPTIONS =
    filterName === 'sortFilter' ? sortOptionsKOKeys : categoryOptionsKOKeys;

  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterName === 'sortFilter'
      ? transformSortOptionsEN(selectedOption as sortOptionsENType)
      : transformCategoryOptionsEN(selectedOption as categoryOptionsENType)
  );

  const handleFilterButtonClick = (
    selectedOption: sortOptionsKOType | categoryOptionsKOType
  ) => {
    setSelectedFilterOption(selectedOption);
    onFilterChange(
      filterName === 'sortFilter'
        ? transformSortOptionsKO(selectedOption as sortOptionsKOType)
        : transformCategoryOptionsKO(selectedOption as categoryOptionsKOType)
    );
    onClose();
  };

  return (
    <>
      <Button
        variant="filled"
        w="100%"
        color="brand.primary-900"
        bg="brand.primary-100"
        borderRadius="50px"
        gap="5px"
        onClick={onOpen}
      >
        {selectedFilterOption}
        <ChevronDownIcon />
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="20px">
          <DrawerBody padding="24px">
            {OPTIONS.map((optionName, index) => {
              return (
                <Fragment key={index}>
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => handleFilterButtonClick(optionName)}
                  >
                    {optionName}
                  </Text>
                  {index !== OPTIONS.length - 1 ? (
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

export default FilterButton;
