import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://457c865e-d9e0-4063-9a22-baf2d127e87e.mock.pstmn.io/api',
  credentials: 'include',
});

const jwtQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      result = refreshResult;
    }
  }
  return result;
};

export const protectedApi = createApi({
  reducerPath: 'protectedApi',
  baseQuery: jwtQuery,
  endpoints: (builder) => ({}),
});
