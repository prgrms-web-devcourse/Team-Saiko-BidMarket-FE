import { sortOptionsENType, sortOptionsKOType } from 'types/products';

const sortOptionsKO = {
  종료임박순: 'END_DATE_ASC',
  최신순: 'CREATED_AT_DESC',
  '시작가 오름차순': 'MINIMUM_PRICE_ASC',
  '시작가 내림차순': 'MINIMUM_PRICE_DESC',
};

const sortOptionsEN = {
  END_DATE_ASC: '종료임박순',
  CREATED_AT_DESC: '최신순',
  MINIMUM_PRICE_ASC: '시작가 오름차순',
  MINIMUM_PRICE_DESC: '시작가 내림차순',
};

const sortOptionsKOKeys = Object.keys(sortOptionsKO);
const sortOptionsENKeys = Object.keys(sortOptionsEN);

const transformSortOptionsKO = (sortOption: sortOptionsKOType) => {
  return sortOptionsKO[sortOption];
};

const transformSortOptionsEN = (sortOption: sortOptionsENType) => {
  return sortOptionsEN[sortOption];
};

const sortOption = {
  sortOptionsKOKeys,
  sortOptionsENKeys,
  transformSortOptionsKO,
  transformSortOptionsEN,
};

export default sortOption;
