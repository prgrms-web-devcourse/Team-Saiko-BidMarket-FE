import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import useIntervalComparedValue from 'hooks/useIntervalComparedValue';

interface ProductBidRemainedTimeProps {
  expireAt: Date;
}

const DAY_TO_SECONDS = 1000 * 60 * 60 * 24;
const HOUR_TO_SECONDS = 1000 * 60 * 60;
const MINUTE_TO_SECONDS = 1000 * 60;
const SECONDS = 1000;

const ProductBidRemainedTime = ({ expireAt }: ProductBidRemainedTimeProps) => {
  const [remainedTime, setRemainedTime] = useState('계산중입니다.');

  const remainedDayTime = useIntervalComparedValue(
    () =>
      Math.floor(
        (new Date(expireAt).getTime() - new Date().getTime()) / DAY_TO_SECONDS
      ),
    SECONDS
  );

  const remainedHourTime = useIntervalComparedValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) %
          DAY_TO_SECONDS) /
          HOUR_TO_SECONDS
      ),
    SECONDS
  );

  const remainedMinuteTime = useIntervalComparedValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) %
          HOUR_TO_SECONDS) /
          MINUTE_TO_SECONDS
      ),
    SECONDS
  );

  const remainedSecondTime = useIntervalComparedValue(
    () =>
      Math.floor(
        ((new Date(expireAt).getTime() - new Date().getTime()) %
          MINUTE_TO_SECONDS) /
          SECONDS
      ),
    SECONDS
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
