import axios from 'axios';
import {
  Platform,
  airflow,
  dict,
  createPfmInit
} from '@aviatakz/platform-client';

import { userStorageModel } from './user-storage';
import { appConfig } from './app-config';

const config = {
  baseURL: appConfig.pfm.baseUrl,
  headers: {
    'accept-language': 'ru'
  },
  consumer: {
    ...appConfig.pfm.consumer,
    token: userStorageModel.consumerToken()
  }
};

const modules = {
  airflow: airflow({
    polling: {
      intervals: appConfig.pfm.pollingIntervals,
      timeoutInSec: 60
    }
  }),
  dict
};

function createPfm() {
  const pfm = Platform(axios, config, modules);

  pfm.emitter.on('consumer-token-update', (token) => {
    userStorageModel.setConsumerToken(token);
  });

  return pfm;
}

const clientInit = createPfmInit(createPfm);

export const clientAwaited = clientInit.await();
