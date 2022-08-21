import dayjs from 'dayjs';

const isExpired = (expiresAt) => dayjs().isAfter(dayjs(expiresAt));

const getCacheName = (hashcode) => `airpick:cached-search-${hashcode}`;

export const getCachedResult = (hashcode) => {
  const result = JSON.parse(localStorage.getItem(getCacheName(hashcode)));
  if (result && !isExpired(result.expiresAt)) {
    return result.result;
  }
};

export const cacheResult = (result, hashcode) => {
  const expiresAt = dayjs().add(10, 'm');
  console.log(expiresAt);
  localStorage.setItem(
    getCacheName(hashcode),
    JSON.stringify({ result, expiresAt })
  );
};
