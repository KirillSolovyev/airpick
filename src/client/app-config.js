export const appConfig = {
  pfm: {
    consumer: {
      name: import.meta.env.VITE_CLIENT_NAME,
      key: import.meta.env.VITE_CLIENT_KEY
    },
    baseUrl: import.meta.env.VITE_CLIENT_BASE_URL,
    pollingIntervals: {
      international: {
        OW: [5],
        RT: [16, 2, 3, 4, 5]
      },
      domestic: {
        OW: [2, 2, 3, 4, 5],
        RT: [4, 2, 3, 4, 5]
      }
    }
  }
};
