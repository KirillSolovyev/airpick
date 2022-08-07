import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';

dayjs.locale(ru);

const format = (date, format) => dayjs(date).format(format);
const getVerbalDate = (date) => format(date, 'DD MMM');
const removeTimezone = (t) => t.replace(/[+-]\d{2}:\d{2}$/g, '');
const prettyTime = (date) => format(date, 'HH:mm');

const prettyDurationFromSeconds = (secondsStr, delimiter = '') => {
  const seconds = Number(secondsStr);
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor((seconds / 3600) % 24);
  const minutes = Math.floor((seconds % 3600) / 60);

  const dDisplay = days > 0 ? `${days}${delimiter}д` : '';
  const hDisplay = hours > 0 ? ` ${hours}${delimiter}ч` : '';
  const mDisplay = minutes > 0 ? ` ${minutes}${delimiter}м` : '';
  return `${dDisplay}${hDisplay}${mDisplay}`;
};

export const dateUtils = {
  format,
  getVerbalDate,
  removeTimezone,
  prettyTime,
  prettyDurationFromSeconds
};
