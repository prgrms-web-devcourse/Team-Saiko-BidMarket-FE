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

interface FilterButtonTypes {
  filterName: 'sortFilter' | 'categoryFilter';
  selectedCategoryOption?: sortOptionsENType;
  selectedSortOption?: categoryOptionsENType;
  handleFilterChange: (selectedOption: string) => void;
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
  selectedCategoryOption,
  selectedSortOption,
  handleFilterChange,
}: FilterButtonTypes) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OPTIONS =
    filterName === 'sortFilter' ? sortOptionsKOKeys : categoryOptionsKOKeys;

  console.log(selectedSortOption, selectedCategoryOption);
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    filterName === 'sortFilter'
      ? transformSortOptionsEN(selectedSortOption as sortOptionsENType) ??
          'END_DATE_ASC'
      : transformCategoryOptionsEN(
          selectedCategoryOption as categoryOptionsENType
        ) ?? 'ALL'
  );

  const handleFilterButtonClick = (selectedOption: string) => {
    setSelectedFilterOption(selectedOption);
    handleFilterChange(
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
