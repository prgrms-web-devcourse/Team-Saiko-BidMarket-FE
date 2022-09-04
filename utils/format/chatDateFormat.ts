import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 *  2022년 9월 4일
 */
const chatDateFormat = (createdAt: Date) =>
  format(new Date(createdAt), 'yyyy년 M월 d일', { locale: ko });

export default chatDateFormat;
