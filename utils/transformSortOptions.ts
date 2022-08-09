import { sortOptionsENType, sortOptionsKOType } from 'types/products';

const sortOptionsKO: {
  [key: string]: sortOptionsENType;
} = {
  종료임박순: 'END_DATE_ASC',
  최신순: 'CREATED_AT_DESC',
  '시작가 오름차순': 'MINIMUM_PRICE_ASC',
  '시작가 내림차순': 'MINIMUM_PRICE_DESC',
};

const sortOptionsEN: {
  [key: string]: sortOptionsKOType;
} = {
  END_DATE_ASC: '종료임박순',
  CREATED_AT_DESC: '최신순',
  MINIMUM_PRICE_ASC: '시작가 오름차순',
  MINIMUM_PRICE_DESC: '시작가 내림차순',
};

const sortOptionsKOKeys = Object.keys(
  sortOptionsKO
) as Array<sortOptionsKOType>;
const sortOptionsENKeys = Object.keys(
  sortOptionsEN
) as Array<sortOptionsENType>;

const transformSortOptionsKO = (
  sortOption: sortOptionsKOType
): sortOptionsENType => {
  return sortOptionsKO[sortOption];
};

const transformSortOptionsEN = (
  sortOption: sortOptionsENType
): sortOptionsKOType => {
  return sortOptionsEN[sortOption];
};

const sortOption = {
  sortOptionsKOKeys,
  sortOptionsENKeys,
  transformSortOptionsKO,
  transformSortOptionsEN,
};

export default sortOption;
