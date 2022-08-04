import { intervalToDuration, formatDuration } from 'date-fns';
import { ko } from 'date-fns/locale';

const remainedTimeFormat = (expiredTime: Date) => {
  const remainedTime = intervalToDuration({
    start: new Date(),
    end: new Date(expiredTime),
  });

  return formatDuration(remainedTime, { locale: ko });
};

export default remainedTimeFormat;
