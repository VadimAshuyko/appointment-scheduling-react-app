import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://457c865e-d9e0-4063-9a22-baf2d127e87e.mock.pstmn.io/api'}),
  endpoints: (builder) => ({}),
});
