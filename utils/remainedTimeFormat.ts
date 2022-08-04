import { intervalToDuration, formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';

const BID_FINISHED = '이미 경매가 종료된 상품입니다';

const remainedTimeFormat = (expiredTime: Date) => {
  const currentTime = new Date();
  expiredTime = new Date(expiredTime);

  if (expiredTime < currentTime) {
    return BID_FINISHED;
  }

  const remainedTime = intervalToDuration({
    start: currentTime,
    end: expiredTime,
  });

  return formatDuration(remainedTime, { locale: ko });
};

export default remainedTimeFormat;
