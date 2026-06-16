import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

export default (reducer) => {
  const persistReducers = persistReducer(
    {
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducer,
  );

  return persistReducers;
};
