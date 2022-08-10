import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import useIntervalValue from 'hooks/useIntervalValue';

interface ProductBidRemainedTimeProps {
  expireAt: Date;
}

const ProductBidRemainedTime = ({ expireAt }: ProductBidRemainedTimeProps) => {
  const [remainedTime, setRemainedTime] = useState('계산중입니다.');

  const remainedDayTime = useIntervalValue(
    () =>
      Math.floor(
        (new Date(expireAt).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ),
    1000
  );

  const remainedHourTime = useIntervalValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) %
          (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
    1000
  );

  const remainedMinuteTime = useIntervalValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) %
          (1000 * 60 * 60)) /
          (1000 * 60)
      ),
    1000
  );

  const remainedSecondTime = useIntervalValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) % (1000 * 60)) /
          1000
      ),
    1000
  );

  useEffect(() => {
    if (remainedSecondTime < 0) {
      setRemainedTime('이미 경매가 종료된 상품입니다.');
      return;
    }

    setRemainedTime(`${remainedDayTime}일 ${remainedHourTime}시간 ${remainedMinuteTime}분
    ${remainedSecondTime}초`);
  }, [
    remainedDayTime,
    remainedHourTime,
    remainedMinuteTime,
    remainedSecondTime,
  ]);

  return (
    <Text fontSize="sm" bg="#EFEFEF" padding="3px 10px" borderRadius="20px">
      {remainedTime}
    </Text>
  );
};

export default ProductBidRemainedTime;
