import { Checkbox } from '@chakra-ui/react';

const BidFilterCheckBox = () => {
  return (
    <>
      <Checkbox
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
