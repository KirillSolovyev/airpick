import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

dayjs.locale(ru);

export const format = (date, format) => dayjs(date).format(format);
export const getVerbalDate = (date) => format(date, 'DD MMM');
