import {
  Text,
  Flex,
  Image,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Input,
  DrawerHeader,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';

import { bidAPI } from 'apis';
import useForm from 'hooks/useForm';
import { biddingPriceValidation, priceFormat } from 'utils';

interface ProductBidDrawerProps {
  minimumPrice: number;
  isOpen: boolean;
  onClose: () => void;
}

const ProductBidDrawer = ({
  minimumPrice,
  isOpen,
  onClose,
}: ProductBidDrawerProps) => {
  const toast = useToast();
  const router = useRouter();
  const { productId } = router.query;
  const [biddingPrice, setBiddingPrice] = useState(0);
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: { minimumPrice },
    onSubmit: () => {
      createBiddingAuthUser();
    },
    //TODO
    validate: biddingPriceValidation,
  });

  const createBiddingAuthUser = async () => {
    try {
      await bidAPI.createBid(parseInt(productId as string, 10), biddingPrice);
      toast({
        position: 'top',
        title: `${biddingPrice}원에 입찰하였습니다.`,
        status: 'success',
        duration: 1500,
      });
      onClose();
    } catch (error) {
      console.log(error);
      toast({
        position: 'top',
        title: `입찰에 실패하였습니다.`,
        status: 'error',
        duration: 1500,
      });
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBiddingPrice(Number(e.target.value));
  };

  const handleClose = () => {
    errors.biddingPrice = '';
    setBiddingPrice(0);
    onClose();
  };

  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={handleClose}>
      <DrawerOverlay />
      <DrawerContent borderTopRadius="20px">
        <form>
          <DrawerHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <Flex alignItems="center" gap="10px">
                <Image src="/svg/price.svg" alt="bid-price" />
                <Text fontWeight="bold" fontSize="lg">
                  입찰 희망가
                </Text>
              </Flex>
              <Button
                bg="brand.primary-900"
                color="white"
                size="sm"
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                입찰
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody paddingBottom="20px">
            <FormControl
              isInvalid={(errors.biddingPrice as string) ? true : false}
            >
              <Flex direction="column">
                <Input
                  name="biddingPrice"
                  type="number"
                  placeholder={`${priceFormat(
                    minimumPrice
                  )}원 이상 입력해주세요`}
                  focusBorderColor="brand.primary-900"
                  onChange={handleChange}
                  onInput={handleInput}
                />
                <Flex
                  justifyContent={
                    errors.biddingPrice ? 'space-between' : 'flex-end'
                  }
                >
                  <FormErrorMessage>
                    {errors.biddingPrice as string}
                  </FormErrorMessage>
                  <Text fontSize="sm" color="#007C14" marginTop="8px">
                    {priceFormat(biddingPrice)}원
                  </Text>
                </Flex>
              </Flex>
            </FormControl>
          </DrawerBody>
        </form>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductBidDrawer;
