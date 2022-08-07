import { initUserStorage } from '@aviatakz/user-storage';

export const userStorageModel = initUserStorage({
  userTokenKey: 'airpick:token',
  refreshTokenKey: 'airpick:refresh-token',
  consumerTokenKey: 'airpick:consumer-token',
  userIdKey: 'airpick:user-id'
});
