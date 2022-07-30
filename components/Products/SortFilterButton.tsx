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

const SORT_OPTIONS = [
  '종료임박순',
  '최신순',
  '입찰건수',
  '시작가 오름차순',
  '시작가 내림차순',
];

const SortFilterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // @TODO url의 sort에 따라 정해지는 것으로 개선될 예정
  const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS[0]);

  const handleSortFilterButtonClick = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
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
        {selectedSortOption}
        <ChevronDownIcon />
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent borderTopRadius="20px">
          <DrawerBody padding="24px">
            {SORT_OPTIONS.map((optionName, index) => {
              return (
                <Fragment key={index}>
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => handleSortFilterButtonClick(optionName)}
                  >
                    {optionName}
                  </Text>
                  {index !== SORT_OPTIONS.length - 1 ? (
                    <Divider margin="10px 0" />
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

export default SortFilterButton;
