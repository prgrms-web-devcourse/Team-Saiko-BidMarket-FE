import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { ChangeEvent, Fragment, useState } from 'react';

interface CategoryProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Category = ({ onChange }: CategoryProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Categoryitems = [
    '디지털 기기',
    '생활 가전"',
    '가구/인테리어',
    '유아 도서',
    '생활/가공 식품',
    '스포츠/레저',
    '여성 잡화',
    '여성 의류',
    '남성 패션/잡화',
    '게임/취미',
    '뷰티/미용',
    '반려 동물 용품',
    '도서/티켓/음반',
    '식물',
    '기타 중고 물품',
  ];
  const [selectedCategory, setSelectedCategory] = useState('카테고리');

  const handleCategoryClick = (item: string) => {
    setSelectedCategory(item);
    onClose();
    onChange;
  };
  return (
    <>
      <Button
        bg="#ffffff"
        border="1px"
        borderColor="#B6B6B6"
        w="100%"
        onClick={onOpen}
        color="#718096"
        fontWeight="normal"
        h="50px"
      >
        <Flex w="100%" justifyContent="space-between">
          {selectedCategory}
          <ChevronDownIcon w="20px" h="20px" color="#718096" />
        </Flex>
      </Button>
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            카테고리를 선택하세요.
          </DrawerHeader>
          <DrawerBody>
            {Categoryitems.map((item) => {
              return (
                <Fragment key={item}>
                  <Button onClick={() => handleCategoryClick(item)}>
                    {item}
                  </Button>
                </Fragment>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Category;
