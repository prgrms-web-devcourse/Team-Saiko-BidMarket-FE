import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 *  오후 1:22
 */
const chatTimeFormat = (createdAt: Date) =>
  format(new Date(createdAt), 'aaaaa h:mm', { locale: ko });

export default chatTimeFormat;
