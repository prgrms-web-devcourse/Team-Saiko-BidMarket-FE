import { Checkbox } from '@chakra-ui/react';

interface BidFilterCheckBoxTypes {
  isProgressed: boolean;
  onBidFilterChange: () => void;
}

const BidFilterCheckBox = ({
  isProgressed,
  onBidFilterChange,
}: BidFilterCheckBoxTypes) => {
  return (
    <>
      <Checkbox
        isChecked={isProgressed}
        onChange={onBidFilterChange}
        sx={{
          '.chakra-checkbox__control': {
            borderRadius: '50%',
          },
          '.chakra-checkbox__control[data-checked]': {
            background: 'brand.primary-900',
            borderColor: 'brand.primary-900',
          },
        }}
      >
        낙찰된 상품만 보기
      </Checkbox>
    </>
  );
};

export default BidFilterCheckBox;
