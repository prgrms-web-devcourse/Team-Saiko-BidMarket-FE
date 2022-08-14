import { StarIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { heartAPI } from 'apis';
import { setToastInfo } from 'utils';

interface ProductHeartProps {
  productId: number;
  userId: number;
  title: string;
}

const ProductHeart = ({ productId, userId, title }: ProductHeartProps) => {
  const [isHeartProduct, setIsHeartHeartProduct] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleHeartClick = async () => {
    if (userId === -1) {
      toast(setToastInfo('top', '찜은 로그인 후 이용 가능합니다.', 'warning'));
      router.push('/login');
      return;
    }

    if (!isHeartProduct) {
      try {
        await heartAPI.putHeart(productId, userId);
        setIsHeartHeartProduct(true);
        toast(setToastInfo('top', `${title} 상품을 찜했습니다!`, 'success'));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await heartAPI.deleteHeart(productId);
        setIsHeartHeartProduct(false);
        toast(
          setToastInfo('top', `${title} 상품의 찜을 취소하였습니다.`, 'success')
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <StarIcon
      w="4"
      color={isHeartProduct ? 'brand.primary-900' : '#BFBFBF'}
      cursor="pointer"
      onClick={handleHeartClick}
    />
  );
};

export default ProductHeart;
