import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export default (reducer) => {
  const persistReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'],
    },
    reducer,
  );

  return persistReducers;
};
