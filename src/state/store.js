import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import rootReducer from './rootReducer';
import {publicApi} from '../services/api/publicApi';
import {protectedApi} from '../services/api/protectedApi';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware).concat(protectedApi.middleware),
});

setupListeners(store.dispatch);

export default store;
