import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const distanceTimeFormat = (createdAt: Date) => {
  return formatDistanceToNow(createdAt, { locale: ko, addSuffix: true });
};

export default distanceTimeFormat;
