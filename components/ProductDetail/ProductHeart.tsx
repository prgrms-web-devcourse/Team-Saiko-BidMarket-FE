import { StarIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { heartAPI } from 'apis';
import { EMPTY_USERID } from 'hooks/useLoginUser';
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

  useEffect(() => {
    getProductHeartAuthUser();
  }, []);

  const getProductHeartAuthUser = async () => {
    try {
      const { heart } = (await heartAPI.getHeartAuthUser(productId)).data;
      setIsHeartHeartProduct(heart);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHeartClick = () => {
    checkLoginAuthUser();
    toggleHeartProduct();
  };

  const checkLoginAuthUser = () => {
    if (userId !== EMPTY_USERID) {
      return;
    }

    toast(setToastInfo('top', '찜은 로그인 후 이용 가능합니다.', 'warning'));
    router.push('/login');
  };

  const toggleHeartProduct = async () => {
    try {
      await heartAPI.updateHeart(productId);
      setIsHeartHeartProduct(!isHeartProduct);

      const toastContent = isHeartProduct
        ? `${title}의 찜을 취소하였습니다.`
        : `${title}를 찜했습니다!`;
      toast(setToastInfo('top', toastContent, 'success'));
    } catch (error) {
      console.log(error);
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
