import {combineReducers} from '@reduxjs/toolkit';
import {publicApi} from '../services/api/publicApi';
import {protectedApi} from '../services/api/protectedApi';

const rootReducer = combineReducers({
  [publicApi.reducerPath]: publicApi.reducer,
  [protectedApi.reducerPath]: protectedApi.reducer,
});

export default rootReducer;
