import {protectedApi} from './api/protectedApi';

const userService = protectedApi.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (password) => ({
        url: '/user/password-reset',
        method: 'POST',
        body: password,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useResetPasswordMutation,
} = userService;
