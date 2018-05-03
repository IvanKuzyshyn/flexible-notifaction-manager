import storage from 'redux-persist/lib/storage';

export const storagePersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
