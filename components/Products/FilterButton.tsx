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

interface FilterButtonTypes {
  filterName: 'sortFilter' | 'categoryFilter';
}

const CATEGORY_OPTIONS = ['전체', '디지털 기기', '생활 가전', '가구 인테리어'];
const SORT_OPTIONS = [
  '종료임박순',
  '최신순',
  '입찰건수',
  '시작가 오름차순',
  '시작가 내림차순',
];

const FilterButton = ({ filterName }: FilterButtonTypes) => {
  const OPTIONS = filterName === 'sortFilter' ? SORT_OPTIONS : CATEGORY_OPTIONS;
  const { isOpen, onOpen, onClose } = useDisclosure();

  // @TODO url의 category에 따라 정해지는 것으로 개선될 예정 OR 전체를 기본값
  const [selectedFilterOption, setSelectedFilterOption] = useState(OPTIONS[0]);

  const handleFilterButtonClick = (selectedOption: string) => {
    setSelectedFilterOption(selectedOption);
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

export default FilterButton;
