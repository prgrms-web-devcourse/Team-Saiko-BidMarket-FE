import {
  categoryOptionsENType,
  categoryOptionsKOType,
} from 'types/categoryOption';

const categoryOptionsKO: {
  [key: string]: categoryOptionsENType;
} = {
  전체: 'ALL',
  '디지털 기기': 'DIGITAL_DEVICE',
  '생활 가전': 'HOUSEHOLD_APPLIANCE',
  '가구/인테리어': 'FURNITURE',
  '유아 도서': 'CHILDREN_BOOK',
  '생활/가공 식품': 'FOOD',
  '스포츠/레저': 'SPORTS_LEISURE',
  '여성 잡화': 'WOMAN_GOODS',
  '여성 의류': 'WOMAN_CLOTHES',
  '남성패션/잡화': 'MAN_FASHION_GOODS',
  '게임/취미': 'HOBBY',
  '뷰티/미용': 'BEAUTY',
  '반려 동물 용품': 'PET_SUPPLY',
  '도서/티켓/음반': 'BOOK_TICKET_RECORD',
  식물: 'PLANT',
  '기타 중고 물품': 'ETC',
};

const categoryOptionsEN: {
  [key: string]: categoryOptionsKOType;
} = {
  ALL: '전체',
  DIGITAL_DEVICE: '디지털 기기',
  HOUSEHOLD_APPLIANCE: '생활 가전',
  FURNITURE: '가구/인테리어',
  CHILDREN_BOOK: '유아 도서',
  FOOD: '생활/가공 식품',
  SPORTS_LEISURE: '스포츠/레저',
  WOMAN_GOODS: '여성 잡화',
  WOMAN_CLOTHES: '여성 의류',
  MAN_FASHION_GOODS: '남성패션/잡화',
  HOBBY: '게임/취미',
  BEAUTY: '뷰티/미용',
  PET_SUPPLY: '반려 동물 용품',
  BOOK_TICKET_RECORD: '도서/티켓/음반',
  PLANT: '식물',
  ETC: '기타 중고 물품',
};

const categoryOptionsKOKeys = Object.keys(
  categoryOptionsKO
) as Array<categoryOptionsKOType>;
const categoryOptionsENKeys = Object.keys(
  categoryOptionsEN
) as Array<categoryOptionsENType>;

const transformCategoryOptionsKO = (
  category: categoryOptionsKOType
): categoryOptionsENType => {
  return categoryOptionsKO[category];
};

const transformCategoryOptionsEN = (
  category: categoryOptionsENType
): categoryOptionsKOType => {
  return categoryOptionsEN[category];
};

const categoryOption = {
  categoryOptionsKOKeys,
  categoryOptionsENKeys,
  transformCategoryOptionsKO,
  transformCategoryOptionsEN,
};

export default categoryOption;
